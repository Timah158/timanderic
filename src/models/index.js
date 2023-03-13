// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Interview, ProjectContent } = initSchema(schema);

export {
  Project,
  Interview,
  ProjectContent
};