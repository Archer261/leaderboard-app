import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api-euwest.graphcms.com/v1/PROJECT_ID/master',
        headers: {
            authorization: `Bearer YOUR_API_TOKEN`
        }
    }),
    cache: new InMemoryCache()
});

export default client;