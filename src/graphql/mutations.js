/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProjectSection = /* GraphQL */ `
  mutation CreateProjectSection(
    $input: CreateProjectSectionInput!
    $condition: ModelProjectSectionConditionInput
  ) {
    createProjectSection(input: $input, condition: $condition) {
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
export const updateProjectSection = /* GraphQL */ `
  mutation UpdateProjectSection(
    $input: UpdateProjectSectionInput!
    $condition: ModelProjectSectionConditionInput
  ) {
    updateProjectSection(input: $input, condition: $condition) {
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
export const deleteProjectSection = /* GraphQL */ `
  mutation DeleteProjectSection(
    $input: DeleteProjectSectionInput!
    $condition: ModelProjectSectionConditionInput
  ) {
    deleteProjectSection(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createInterview = /* GraphQL */ `
  mutation CreateInterview(
    $input: CreateInterviewInput!
    $condition: ModelInterviewConditionInput
  ) {
    createInterview(input: $input, condition: $condition) {
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
export const updateInterview = /* GraphQL */ `
  mutation UpdateInterview(
    $input: UpdateInterviewInput!
    $condition: ModelInterviewConditionInput
  ) {
    updateInterview(input: $input, condition: $condition) {
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
export const deleteInterview = /* GraphQL */ `
  mutation DeleteInterview(
    $input: DeleteInterviewInput!
    $condition: ModelInterviewConditionInput
  ) {
    deleteInterview(input: $input, condition: $condition) {
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
