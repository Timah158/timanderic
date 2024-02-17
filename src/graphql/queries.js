/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjectSection = /* GraphQL */ `
  query GetProjectSection($id: ID!) {
    getProjectSection(id: $id) {
      id
      title
      Images
      text
      links
      projectID
      index
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjectSections = /* GraphQL */ `
  query ListProjectSections(
    $filter: ModelProjectSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        Images
        text
        links
        projectID
        index
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectSectionsByProjectID = /* GraphQL */ `
  query ProjectSectionsByProjectID(
    $projectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectSectionsByProjectID(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        Images
        text
        links
        projectID
        index
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdOn
        completedOn
        description
        createdBy
        hidden
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInterview = /* GraphQL */ `
  query GetInterview($id: ID!) {
    getInterview(id: $id) {
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
export const listInterviews = /* GraphQL */ `
  query ListInterviews(
    $filter: ModelInterviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
