import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerInterviews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interviews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly date?: string | null;
  readonly about?: string | null;
  readonly user?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInterviews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interviews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly date?: string | null;
  readonly about?: string | null;
  readonly user?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Interviews = LazyLoading extends LazyLoadingDisabled ? EagerInterviews : LazyInterviews

export declare const Interviews: (new (init: ModelInit<Interviews>) => Interviews) & {
  copyOf(source: Interviews, mutator: (draft: MutableModel<Interviews>) => MutableModel<Interviews> | void): Interviews;
}

type EagerProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Content?: string | null;
  readonly Created_Date?: string | null;
  readonly Modified_Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Content?: string | null;
  readonly Created_Date?: string | null;
  readonly Modified_Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Projects = LazyLoading extends LazyLoadingDisabled ? EagerProjects : LazyProjects

export declare const Projects: (new (init: ModelInit<Projects>) => Projects) & {
  copyOf(source: Projects, mutator: (draft: MutableModel<Projects>) => MutableModel<Projects> | void): Projects;
}