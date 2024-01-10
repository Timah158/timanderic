// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Interview, Project, ProjectSection } = initSchema(schema);

export {
  Interview,
  Project,
  ProjectSection
};