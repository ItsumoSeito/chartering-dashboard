import { z } from 'zod';

const positiveNumber = z
  .string()
  .min(1, 'Field is required')
  .refine((val) => !isNaN(Number(val)), {
    message: 'Value must be a number',
  })
  .refine((val) => Number(val) > 0, {
    message: 'Value must be a positive number',
  });

export const formSchema = z.object({
  originAirport: z.string().min(1, 'Origin airport is required'),
  originAirportCode: z.string(),
  destinationAirport: z.string().min(1, 'Destination airport is required'),
  destinationAirportCode: z.string(),
  requestedDepartureDate: z
    .string()
    .min(1, 'Departure date is required')
    .refine((val) => !isNaN(Date.parse(val)))
    .refine(
      (val) => Date.parse(val) >= Date.now(),
      'Departure date must be in the future'
    ),
  cargoType: z.string().min(1, 'Cargo type is required'),
  cargoWeight: positiveNumber,
  cargoVolume: positiveNumber,
  cargoLength: positiveNumber,
  cargoWidth: positiveNumber,
  cargoHeight: positiveNumber,
  cargoSpecialHandlingInformation: z.string(),
});
