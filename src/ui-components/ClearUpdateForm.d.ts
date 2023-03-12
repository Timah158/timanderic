/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Clear } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClearUpdateFormInputValues = {
    title?: string;
    createdOn?: string;
    completedOn?: string;
    description?: string;
    img?: string;
    createdBy?: string;
    hidden?: boolean;
    status?: string;
};
export declare type ClearUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    createdOn?: ValidationFunction<string>;
    completedOn?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    hidden?: ValidationFunction<boolean>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClearUpdateFormOverridesProps = {
    ClearUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    completedOn?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    hidden?: PrimitiveOverrideProps<SwitchFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClearUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClearUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clear?: Clear;
    onSubmit?: (fields: ClearUpdateFormInputValues) => ClearUpdateFormInputValues;
    onSuccess?: (fields: ClearUpdateFormInputValues) => void;
    onError?: (fields: ClearUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClearUpdateFormInputValues) => ClearUpdateFormInputValues;
    onValidate?: ClearUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClearUpdateForm(props: ClearUpdateFormProps): React.ReactElement;
