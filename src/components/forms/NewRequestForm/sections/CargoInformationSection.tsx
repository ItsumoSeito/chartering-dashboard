import React from 'react';
import { FormRow } from '../../shared/FormRow';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';
import { fields } from '../fields';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const CargoInformationSection = () => {
  const form = useFormContext();

  return (
    <>
      <h2 className="text-3xl">Cargo information</h2>
      <FormRow>
        <FormField
          control={form.control}
          name={fields.cargoType}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Cargo type</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter cargo type..." />
              </FormControl>
              <FormDescription>
                Please provide the type of cargo you would like to transport
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fields.cargoWeight}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Cargo weight</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input
                    {...field}
                    placeholder="Enter cargo weight..."
                    type="number"
                  />
                  <Label className="absolute right-8">kg</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </FormRow>
      <FormRow>
        <FormField
          control={form.control}
          name={fields.cargoVolume}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Cargo volume</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input
                    {...field}
                    placeholder="Enter cargo volume..."
                    type="number"
                  />
                  <Label className="absolute right-8">sqm</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fields.cargoLength}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Cargo length</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input
                    {...field}
                    placeholder="Enter cargo length..."
                    type="number"
                  />
                  <Label className="absolute right-8">cm</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </FormRow>
      <FormRow>
        <FormField
          control={form.control}
          name={fields.cargoWidth}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Cargo width</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input
                    {...field}
                    placeholder="Enter cargo width..."
                    type="number"
                  />
                  <Label className="absolute right-8">cm</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fields.cargoHeight}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Cargo height</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input
                    {...field}
                    placeholder="Enter cargo height..."
                    type="number"
                  />
                  <Label className="absolute right-8">cm</Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </FormRow>
      <FormField
        control={form.control}
        name={fields.cargoSpecialHandlingInformation}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Cargo handling information</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="h-40"
                placeholder="Enter cargo handling information..."
              />
            </FormControl>
            <FormDescription>
              Please provide any special handling information for your cargo
              e.g. fragile, hazardous, etc.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
