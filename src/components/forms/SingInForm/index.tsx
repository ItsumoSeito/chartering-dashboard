import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './formSchema';
import { Button } from '@/components/ui/button';
import { EmailInput } from '../shared/EmailInput';
import { PasswordInput } from '../shared/PasswordInput';
import { fields } from '../shared/fields';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '@/lib/auth';

type Props = {
  closeDialog: () => void;
};

const SignInForm: React.FC<Props> = ({ closeDialog }) => {
  const signIn = useSignIn();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const submitHandler = async (values: z.infer<typeof formSchema>) => {
    await signIn({ username: values.email, password: values.password });
    closeDialog();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex flex-col gap-6"
      >
        <EmailInput />
        <PasswordInput name={fields.password} label={'Password'} />
        <Button type="submit">Sign in</Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
