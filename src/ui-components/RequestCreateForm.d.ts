/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RequestCreateFormInputValues = {
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
export declare type RequestCreateFormValidationValues = {
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
export declare type RequestCreateFormOverridesProps = {
    RequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type RequestCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestCreateFormInputValues) => RequestCreateFormInputValues;
    onSuccess?: (fields: RequestCreateFormInputValues) => void;
    onError?: (fields: RequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestCreateFormInputValues) => RequestCreateFormInputValues;
    onValidate?: RequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestCreateForm(props: RequestCreateFormProps): React.ReactElement;
