// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Interview } = initSchema(schema);

export {
  Project,
  Interview
};