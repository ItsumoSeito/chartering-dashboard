// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Request } = initSchema(schema);

export {
  Request
};