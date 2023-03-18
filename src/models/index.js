// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Interview, Section } = initSchema(schema);

export {
  Project,
  Interview,
  Section
};