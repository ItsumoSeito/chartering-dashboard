import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { fields } from './fields';
import { Input } from '@/components/ui/input';

export const EmailInput = () => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={fields.email}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input {...field} type="email" placeholder="Enter email..." />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};
