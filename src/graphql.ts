import { createServer } from '@graphql-yoga/node';
const server = createServer({
 schema: {
   typeDefs: `type Query { hello: String }`,
   resolvers: { Query: { hello: () => 'Hello Yoga' } }
 }
});
server.start();