/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      title
      content {
        text
        images
      }
      createdOn
      completedOn
      description
      img
      createdBy
      hidden
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      content {
        text
        images
      }
      createdOn
      completedOn
      description
      img
      createdBy
      hidden
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      content {
        text
        images
      }
      createdOn
      completedOn
      description
      img
      createdBy
      hidden
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
