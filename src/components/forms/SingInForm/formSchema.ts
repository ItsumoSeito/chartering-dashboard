import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(8, 'Password is required'),
});
