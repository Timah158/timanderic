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
export declare type InterviewUpdateFormInputValues = {
    email?: string;
    phone?: string;
    date?: string;
    time?: string;
    about?: string;
    user?: string;
};
export declare type InterviewUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewUpdateFormOverridesProps = {
    InterviewUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterviewUpdateFormProps = React.PropsWithChildren<{
    overrides?: InterviewUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    interview?: any;
    onSubmit?: (fields: InterviewUpdateFormInputValues) => InterviewUpdateFormInputValues;
    onSuccess?: (fields: InterviewUpdateFormInputValues) => void;
    onError?: (fields: InterviewUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterviewUpdateFormInputValues) => InterviewUpdateFormInputValues;
    onValidate?: InterviewUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InterviewUpdateForm(props: InterviewUpdateFormProps): React.ReactElement;
