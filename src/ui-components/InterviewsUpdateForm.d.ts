/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Interviews } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InterviewsUpdateFormInputValues = {
    time?: string;
    date?: string;
    about?: string;
    user?: string;
    email?: string;
    phone?: string;
};
export declare type InterviewsUpdateFormValidationValues = {
    time?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewsUpdateFormOverridesProps = {
    InterviewsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterviewsUpdateFormProps = React.PropsWithChildren<{
    overrides?: InterviewsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    interviews?: Interviews;
    onSubmit?: (fields: InterviewsUpdateFormInputValues) => InterviewsUpdateFormInputValues;
    onSuccess?: (fields: InterviewsUpdateFormInputValues) => void;
    onError?: (fields: InterviewsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterviewsUpdateFormInputValues) => InterviewsUpdateFormInputValues;
    onValidate?: InterviewsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InterviewsUpdateForm(props: InterviewsUpdateFormProps): React.ReactElement;
