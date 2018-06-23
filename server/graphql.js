const { typeDefs, resolvers } = require('../lib/types/gql-schema');

const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = (server) => {
  server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};
