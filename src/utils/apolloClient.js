import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import 'dotenv/config';
import Constants from 'expo-constants';

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: Constants.manifest.extra.uri //'http://192.168.1.100:4000/graphql',
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;