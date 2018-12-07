import {
  buildSchema,
  graphqlSync,
  introspectionQuery,
} from 'graphql';

import { fromIntrospectionQuery } from 'graphql-2-json-schema/dist/lib/index.js';

const graphQlToJsonSchema = (schema) => {

  const introspection = graphqlSync(buildSchema(schema), introspectionQuery).data;

  return fromIntrospectionQuery(introspection);
};

export default graphQlToJsonSchema;