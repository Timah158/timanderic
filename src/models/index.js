// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Availability, Interviews, Projects } = initSchema(schema);

export {
  Availability,
  Interviews,
  Projects
};