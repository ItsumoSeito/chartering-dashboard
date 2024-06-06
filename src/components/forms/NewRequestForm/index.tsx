'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Airport } from '@/lib/models/Airport';
import { Button } from '@/components/ui/button';
import { DataStore } from '@aws-amplify/datastore';
import { Request } from '@/models';
import { mapFeRequestToApi } from '@/lib/api/requests';
import { useToast } from '@/components/ui/use-toast';
import { DestinationInformationSection } from './sections/DestinationInformationSection';
import { CargoInformationSection } from './sections/CargoInformationSection';

type Props = {
  airports: Array<Airport>;
};

const NewRequestForm: React.FC<Props> = ({ airports }) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      originAirport: '',
      originAirportCode: '',
      destinationAirport: '',
      destinationAirportCode: '',
      requestedDepartureDate: undefined,
      cargoType: '',
      cargoWeight: '',
      cargoVolume: '',
      cargoLength: '',
      cargoWidth: '',
      cargoHeight: '',
      cargoSpecialHandlingInformation: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const fetchRequests = async () => {
    const requests = await DataStore.query(Request);
    console.log(requests);
  };
  fetchRequests();

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    const beRequest = mapFeRequestToApi(values);
    DataStore.save(new Request(beRequest))
      .then(() =>
        toast({
          title: 'Request submitted',
          description: 'Your request has been submitted successfully',
          variant: 'success',
        })
      )
      .catch((error) =>
        toast({
          title: 'Error',
          description: 'There was an error submitting your request',
          variant: 'destructive',
        })
      );
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex flex-col gap-10"
      >
        <DestinationInformationSection airports={airports} />
        <CargoInformationSection />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default NewRequestForm;
