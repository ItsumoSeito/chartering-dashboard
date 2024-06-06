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
import { AirportSelector } from '../../shared/AirportSelector';
import { Airport } from '@/lib/models/Airport';
import { DatePicker } from '../../shared/DatePicker';

type Props = {
  airports: Array<Airport>;
};

export const DestinationInformationSection: React.FC<Props> = ({
  airports,
}) => {
  const form = useFormContext();
  const { setValue } = form;

  const originAirportSelectHandler = (airport: Airport) => {
    setValue(fields.originAirport, airport.name);
    setValue(fields.originAirportCode, airport.iataCode);
  };

  const destinationAirportSelectHandler = (airport: Airport) => {
    setValue(fields.destinationAirport, airport.name);
    setValue(fields.destinationAirportCode, airport.iataCode);
  };

  return (
    <>
      <h2 className="text-3xl">Destination Information</h2>
      <FormRow>
        <FormField
          control={form.control}
          name={fields.originAirport}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Origin Airport</FormLabel>
              <FormControl>
                <AirportSelector
                  airports={airports}
                  selectHandler={originAirportSelectHandler}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fields.destinationAirport}
          render={({ field }) => (
            <FormItem className="w-5/12">
              <FormLabel>Destination Airport</FormLabel>
              <FormControl>
                <AirportSelector
                  airports={airports}
                  selectHandler={destinationAirportSelectHandler}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </FormRow>
      <FormField
        control={form.control}
        name={fields.requestedDepartureDate}
        render={({ field }) => (
          <FormItem className="w-5/12">
            <FormLabel>Requested departure date</FormLabel>
            <FormControl>
              <DatePicker {...field} />
            </FormControl>
            <FormDescription>
              This is the date you would like to have your cargo handed over to
              the charter operator
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <hr />
    </>
  );
};
