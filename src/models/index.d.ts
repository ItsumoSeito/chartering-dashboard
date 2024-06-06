import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Request, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly originAirport: string;
  readonly originAirportCode: string;
  readonly destinationAirport: string;
  readonly destinationAirportCode: string;
  readonly requestedDepartureDate: string;
  readonly cargoType: string;
  readonly cargoWeight: number;
  readonly cargoVolume: number;
  readonly cargoLength: number;
  readonly cargoWidth: number;
  readonly cargoHeight: number;
  readonly cargoSpecialHandlingInformation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Request, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly originAirport: string;
  readonly originAirportCode: string;
  readonly destinationAirport: string;
  readonly destinationAirportCode: string;
  readonly requestedDepartureDate: string;
  readonly cargoType: string;
  readonly cargoWeight: number;
  readonly cargoVolume: number;
  readonly cargoLength: number;
  readonly cargoWidth: number;
  readonly cargoHeight: number;
  readonly cargoSpecialHandlingInformation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Request = LazyLoading extends LazyLoadingDisabled ? EagerRequest : LazyRequest

export declare const Request: (new (init: ModelInit<Request>) => Request) & {
  copyOf(source: Request, mutator: (draft: MutableModel<Request>) => MutableModel<Request> | void): Request;
}