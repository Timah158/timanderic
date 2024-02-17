import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerInterview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly phone: string;
  readonly date: string;
  readonly time: string;
  readonly about?: string | null;
  readonly user: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInterview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly phone: string;
  readonly date: string;
  readonly time: string;
  readonly about?: string | null;
  readonly user: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Interview = LazyLoading extends LazyLoadingDisabled ? EagerInterview : LazyInterview

export declare const Interview: (new (init: ModelInit<Interview>) => Interview) & {
  copyOf(source: Interview, mutator: (draft: MutableModel<Interview>) => MutableModel<Interview> | void): Interview;
}