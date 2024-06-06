import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    password: z.string().min(8, 'Password is required'),
    passwordRepeat: z.string().min(8, 'Password is required'),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: 'Passwords do not match',
    path: ['passwordRepeat'],
  });

export const signUpConfirmationFormSchema = z.object({
  code: z.string().length(6, 'Code must be 6 characters long'),
});
