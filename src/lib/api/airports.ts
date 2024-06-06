import { queryKeys } from '@/lib/queryKeys';
import { createSuspenseQuery } from 'react-query-kit';
import { Airport } from '../models/Airport';

export const getAirports = async (): Promise<Array<Airport>> => {
  const data = await fetchAirports();
  const airports = data?.map((airport: any): Airport => {
    return {
      name: airport.airport_name,
      iataCode: airport.iata_code,
      countryIso: airport.country_iso2,
      countryName: airport.country_name || '',
    };
  });
  return airports;
};

export const fetchAirports = async () => {
  const response = await fetch(
    `http://api.aviationstack.com/v1/airports?access_key=${process.env.AVIATIONSTACK_API_KEY}`
  );
  const data = await response.json();
  return data?.data;
};

export const useGetAirports = createSuspenseQuery({
  queryKey: [queryKeys.airports],
  fetcher: fetchAirports,
});
