import { useToast } from '@/components/ui/use-toast';
import React, { useRef, useState } from 'react';
import { signUpFormSchema, signUpConfirmationFormSchema } from './formSchema';
import * as Auth from 'aws-amplify/auth';
import { z } from 'zod';
import { SignUpForm } from './SingUpForm';
import { SignUpConfirmationForm } from './SingUpConfirmationForm';
import { useSignIn } from '@/lib/auth';

type Props = {
  closeDialog: () => void;
};

const Index: React.FC<Props> = ({ closeDialog }) => {
  const [signupRequested, setSignUpRequested] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const userEmail = useRef<string | null>(null);
  const userPassword = useRef<string | null>(null);
  const { toast } = useToast();
  const signIn = useSignIn();

  const signUpSubmitHandler = (values: z.infer<typeof signUpFormSchema>) => {
    Auth.signUp({ username: values.email, password: values.password })
      .then(() => {
        userEmail.current = values.email;
        userPassword.current = values.password;
        setSignUpRequested(true);
      })
      .catch(() =>
        toast({
          title: 'Error',
          description: 'An error occurred while signing up. Please try again.',
          variant: 'destructive',
        })
      );
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
          setSignUpSuccess(true);

          setTimeout(async () => {
            // Try to sign in the user that was just signed up
            const { success } = await signIn({
              username: userEmail.current as string,
              password: userPassword.current as string,
            });
            if (success) {
              toast({
                title: 'Signed in',
                description: 'You have been signed in successfully',
                variant: 'success',
              });
            } else {
              toast({
                title: 'Information',
                description:
                  'Could not automatically sign you in. Please sign in manually',
              });
            }
          }, 2000);

          // Close the dialog and reset the user email and password
          closeDialog();
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
