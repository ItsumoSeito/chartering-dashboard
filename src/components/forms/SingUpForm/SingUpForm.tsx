import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { signUpFormSchema } from './formSchema';
import { Button } from '@/components/ui/button';
import { EmailInput } from '../shared/EmailInput';
import { PasswordInput } from '../shared/PasswordInput';
import { fields } from '../shared/fields';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  submitHandler: (values: z.infer<typeof signUpFormSchema>) => void;
};

export const SignUpForm: React.FC<Props> = ({ submitHandler }) => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordRepeat: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex flex-col gap-6"
      >
        <EmailInput />
        <PasswordInput name={fields.password} label={'Password'} />
        <PasswordInput name={fields.passwordRepeat} label={'Repeat password'} />
        <Button type="submit">Sign up</Button>
      </form>
    </FormProvider>
  );
};
