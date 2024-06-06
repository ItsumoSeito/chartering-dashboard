import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { signUpConfirmationFormSchema } from './formSchema';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

type Props = {
  submitHandler: (values: z.infer<typeof signUpConfirmationFormSchema>) => void;
};

export const SignUpConfirmationForm: React.FC<Props> = ({ submitHandler }) => {
  const form = useForm<z.infer<typeof signUpConfirmationFormSchema>>({
    resolver: zodResolver(signUpConfirmationFormSchema),
    defaultValues: {
      code: '',
    },
    reValidateMode: 'onBlur',
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex flex-col justify-start items-center gap-8"
      >
        <h3 className="text-2xl">Confirm email</h3>
        <p className="text-center">
          Please check your email inbox and enter the verification code we have
          sent to you
        </p>
        <FormField
          control={form.control}
          name={'code'}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Confirm</Button>
      </form>
    </FormProvider>
  );
};
