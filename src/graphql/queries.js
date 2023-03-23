/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjectSection = /* GraphQL */ `
  query GetProjectSection($id: ID!) {
    getProjectSection(id: $id) {
      id
      title
      images
      text
      links
      Project
      index
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        images
        text
        links
        Project
        index
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjectSections = /* GraphQL */ `
  query SyncProjectSections(
    $filter: ModelProjectSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjectSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        images
        text
        links
        Project
        index
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const projectSectionsByProject = /* GraphQL */ `
  query ProjectSectionsByProject(
    $Project: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectSectionsByProject(
      Project: $Project
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        images
        text
        links
        Project
        index
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInterviews = /* GraphQL */ `
  query SyncInterviews(
    $filter: ModelInterviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInterviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
