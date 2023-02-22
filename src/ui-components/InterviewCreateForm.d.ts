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
export declare type InterviewCreateFormInputValues = {
    email?: string;
    phone?: string;
    date?: string;
    time?: string;
    about?: string;
    user?: string;
};
export declare type InterviewCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewCreateFormOverridesProps = {
    InterviewCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterviewCreateFormProps = React.PropsWithChildren<{
    overrides?: InterviewCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InterviewCreateFormInputValues) => InterviewCreateFormInputValues;
    onSuccess?: (fields: InterviewCreateFormInputValues) => void;
    onError?: (fields: InterviewCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterviewCreateFormInputValues) => InterviewCreateFormInputValues;
    onValidate?: InterviewCreateFormValidationValues;
} & React.CSSProperties>;
export default function InterviewCreateForm(props: InterviewCreateFormProps): React.ReactElement;
