import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdOn: string;
  readonly completedOn?: string | null;
  readonly description?: string | null;
  readonly img?: string | null;
  readonly createdBy: string;
  readonly hidden?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdOn: string;
  readonly completedOn?: string | null;
  readonly description?: string | null;
  readonly img?: string | null;
  readonly createdBy: string;
  readonly hidden?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

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