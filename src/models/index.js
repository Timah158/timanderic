// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProjectSection, Project, Interview } = initSchema(schema);

export {
  ProjectSection,
  Project,
  Interview
};