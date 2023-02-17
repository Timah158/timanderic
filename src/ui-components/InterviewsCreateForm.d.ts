/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InterviewsCreateFormInputValues = {
    time?: string;
    date?: string;
    about?: string;
    user?: string;
    email?: string;
    phone?: string;
};
export declare type InterviewsCreateFormValidationValues = {
    time?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewsCreateFormOverridesProps = {
    InterviewsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterviewsCreateFormProps = React.PropsWithChildren<{
    overrides?: InterviewsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InterviewsCreateFormInputValues) => InterviewsCreateFormInputValues;
    onSuccess?: (fields: InterviewsCreateFormInputValues) => void;
    onError?: (fields: InterviewsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterviewsCreateFormInputValues) => InterviewsCreateFormInputValues;
    onValidate?: InterviewsCreateFormValidationValues;
} & React.CSSProperties>;
export default function InterviewsCreateForm(props: InterviewsCreateFormProps): React.ReactElement;
