import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import {resolvers} from './resolvers/resolvers';
import {Constants} from "./utils/constants";
import {defaults} from "./resolvers/defaults";
import localSchema from "./schemas/local.graphql";
import {stringReplaceAll} from './utils/extensionFunctions';

let typeDefs = stringReplaceAll(localSchema, 'extend ', '');

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers,
  defaults,
  typeDefs: typeDefs
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    stateLink,
    new HttpLink({
      uri: Constants.Api.GraphQLUrl
    })
  ]),
  cache: cache,
  connectToDevTools: true,
  tokenName: 'apollo-token'
});

export default client;