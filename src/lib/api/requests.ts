import { FeRequest } from '../models/FeRequest';

export const mapFeRequestToApi = (feRequest: FeRequest) => {
  return {
    originAirport: feRequest.originAirport,
    originAirportCode: feRequest.originAirportCode,
    destinationAirport: feRequest.destinationAirport,
    destinationAirportCode: feRequest.destinationAirportCode,
    requestedDepartureDate: feRequest.requestedDepartureDate,
    cargoType: feRequest.cargoType,
    cargoWeight: parseFloat(feRequest.cargoWeight),
    cargoVolume: parseFloat(feRequest.cargoVolume),
    cargoLength: parseFloat(feRequest.cargoLength),
    cargoWidth: parseFloat(feRequest.cargoWidth),
    cargoHeight: parseFloat(feRequest.cargoHeight),
    cargoSpecialHandlingInformation: feRequest.cargoSpecialHandlingInformation,
  };
};
