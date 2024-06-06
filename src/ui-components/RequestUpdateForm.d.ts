/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Request } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestUpdateFormInputValues = {
    originAirport?: string;
    originAirportCode?: string;
    destinationAirport?: string;
    destinationAirportCode?: string;
    requestedDepartureDate?: string;
    cargoType?: string;
    cargoWeight?: number;
    cargoVolume?: number;
    cargoLength?: number;
    cargoWidth?: number;
    cargoHeight?: number;
    cargoSpecialHandlingInformation?: string;
};
export declare type RequestUpdateFormValidationValues = {
    originAirport?: ValidationFunction<string>;
    originAirportCode?: ValidationFunction<string>;
    destinationAirport?: ValidationFunction<string>;
    destinationAirportCode?: ValidationFunction<string>;
    requestedDepartureDate?: ValidationFunction<string>;
    cargoType?: ValidationFunction<string>;
    cargoWeight?: ValidationFunction<number>;
    cargoVolume?: ValidationFunction<number>;
    cargoLength?: ValidationFunction<number>;
    cargoWidth?: ValidationFunction<number>;
    cargoHeight?: ValidationFunction<number>;
    cargoSpecialHandlingInformation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestUpdateFormOverridesProps = {
    RequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    originAirport?: PrimitiveOverrideProps<TextFieldProps>;
    originAirportCode?: PrimitiveOverrideProps<TextFieldProps>;
    destinationAirport?: PrimitiveOverrideProps<TextFieldProps>;
    destinationAirportCode?: PrimitiveOverrideProps<TextFieldProps>;
    requestedDepartureDate?: PrimitiveOverrideProps<TextFieldProps>;
    cargoType?: PrimitiveOverrideProps<TextFieldProps>;
    cargoWeight?: PrimitiveOverrideProps<TextFieldProps>;
    cargoVolume?: PrimitiveOverrideProps<TextFieldProps>;
    cargoLength?: PrimitiveOverrideProps<TextFieldProps>;
    cargoWidth?: PrimitiveOverrideProps<TextFieldProps>;
    cargoHeight?: PrimitiveOverrideProps<TextFieldProps>;
    cargoSpecialHandlingInformation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    request?: Request;
    onSubmit?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onSuccess?: (fields: RequestUpdateFormInputValues) => void;
    onError?: (fields: RequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onValidate?: RequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestUpdateForm(props: RequestUpdateFormProps): React.ReactElement;
