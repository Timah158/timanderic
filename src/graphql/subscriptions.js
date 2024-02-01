/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProjectSection = /* GraphQL */ `
  subscription OnCreateProjectSection(
    $filter: ModelSubscriptionProjectSectionFilterInput
  ) {
    onCreateProjectSection(filter: $filter) {
      id
      title
      images
      text
      links
      index
      projectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProjectSection = /* GraphQL */ `
  subscription OnUpdateProjectSection(
    $filter: ModelSubscriptionProjectSectionFilterInput
  ) {
    onUpdateProjectSection(filter: $filter) {
      id
      title
      images
      text
      links
      index
      projectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProjectSection = /* GraphQL */ `
  subscription OnDeleteProjectSection(
    $filter: ModelSubscriptionProjectSectionFilterInput
  ) {
    onDeleteProjectSection(filter: $filter) {
      id
      title
      images
      text
      links
      index
      projectID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      title
      createdOn
      completedOn
      description
      createdBy
      hidden
      status
      ProjectSections {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      title
      createdOn
      completedOn
      description
      createdBy
      hidden
      status
      ProjectSections {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      title
      createdOn
      completedOn
      description
      createdBy
      hidden
      status
      ProjectSections {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInterview = /* GraphQL */ `
  subscription OnCreateInterview(
    $filter: ModelSubscriptionInterviewFilterInput
  ) {
    onCreateInterview(filter: $filter) {
      id
      email
      phone
      date
      time
      about
      user
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInterview = /* GraphQL */ `
  subscription OnUpdateInterview(
    $filter: ModelSubscriptionInterviewFilterInput
  ) {
    onUpdateInterview(filter: $filter) {
      id
      email
      phone
      date
      time
      about
      user
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInterview = /* GraphQL */ `
  subscription OnDeleteInterview(
    $filter: ModelSubscriptionInterviewFilterInput
  ) {
    onDeleteInterview(filter: $filter) {
      id
      email
      phone
      date
      time
      about
      user
      createdAt
      updatedAt
      __typename
    }
  }
`;
