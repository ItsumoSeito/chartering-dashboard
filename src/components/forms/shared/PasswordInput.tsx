import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';

type Props = {
  name: string;
  label: string;
};

export const PasswordInput: React.FC<Props> = ({ name, label }) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} type="password" placeholder="Enter password..." />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};
