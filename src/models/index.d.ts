import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerProjectSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly images?: (string | null)[] | null;
  readonly text: string[];
  readonly links?: (string | null)[] | null;
  readonly index: number;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly images?: (string | null)[] | null;
  readonly text: string[];
  readonly links?: (string | null)[] | null;
  readonly index: number;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectSection = LazyLoading extends LazyLoadingDisabled ? EagerProjectSection : LazyProjectSection

export declare const ProjectSection: (new (init: ModelInit<ProjectSection>) => ProjectSection) & {
  copyOf(source: ProjectSection, mutator: (draft: MutableModel<ProjectSection>) => MutableModel<ProjectSection> | void): ProjectSection;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly createdOn: string;
  readonly completedOn?: string | null;
  readonly description: string;
  readonly createdBy: string;
  readonly hidden: boolean;
  readonly status?: string | null;
  readonly ProjectSections?: (ProjectSection | null)[] | null;
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
  readonly createdOn: string;
  readonly completedOn?: string | null;
  readonly description: string;
  readonly createdBy: string;
  readonly hidden: boolean;
  readonly status?: string | null;
  readonly ProjectSections: AsyncCollection<ProjectSection>;
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