'use client';

import { useToast } from '@/components/ui/use-toast';
import React, { use, useRef, useState } from 'react';
import { signUpFormSchema, signUpConfirmationFormSchema } from './formSchema';
import * as Auth from 'aws-amplify/auth';
import { z } from 'zod';
import { SignUpForm } from './SingUpForm';
import { SignUpConfirmationForm } from './SingUpConfirmationForm';
import { UserGroup } from '@/lib/models/UserGroup';

type Props = {
  closeDialog: () => void;
};

const Index: React.FC<Props> = ({ closeDialog }) => {
  const [signupRequested, setSignUpRequested] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const userEmail = useRef<string | null>(null);
  const userPassword = useRef<string | null>(null);
  const { toast } = useToast();

  const signUpSubmitHandler = (values: z.infer<typeof signUpFormSchema>) => {
    Auth.signUp({
      username: values.email,
      password: values.password,
      options: { userAttributes: { 'custom:userGroup': UserGroup.Customers } },
    })
      .then(() => {
        userEmail.current = values.email;
        userPassword.current = values.password;
        setSignUpRequested(true);
      })
      .catch(() => {
        toast({
          title: 'Error',
          description:
            'An error occurred while signing up. Please try signing up again.',
          variant: 'destructive',
        });
        closeDialog();
      });
  };

  const signUpConfirmationSubmitHandler = (
    values: z.infer<typeof signUpConfirmationFormSchema>
  ) => {
    Auth.confirmSignUp({
      username: userEmail.current as string,
      confirmationCode: values.code,
    })
      .then((response) => {
        if (response.isSignUpComplete) {
          // Close the dialog and reset the user email and password
          setSignUpSuccess(true);
          setTimeout(() => {
            closeDialog();
          }, 2000);
          userEmail.current = null;
          userPassword.current = null;
        } else {
          throw new Error('Sign up was not completed');
        }
      })
      .catch(() =>
        toast({
          title: 'Error',
          description:
            'An error occurred while confirming sign up. Please try again.',
          variant: 'destructive',
        })
      );
  };

  if (!signupRequested && !signUpSuccess) {
    return <SignUpForm submitHandler={signUpSubmitHandler} />;
  }

  if (signupRequested && !signUpSuccess) {
    return (
      <SignUpConfirmationForm submitHandler={signUpConfirmationSubmitHandler} />
    );
  }

  if (signupRequested && signUpSuccess) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-3xl">Sign up successful</h2>
      </div>
    );
  }

  return null;
};

export default Index;
