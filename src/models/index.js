// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Interview } = initSchema(schema);

export {
  Interview
};