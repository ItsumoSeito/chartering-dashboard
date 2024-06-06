import { formSchema } from '@/components/forms/NewRequestForm/formSchema';
import { z } from 'zod';

export type FeRequest = z.infer<typeof formSchema>;
