const { typeDefs, resolvers } = require('../lib/types/gql-schema');

const { buildSchema } = require('graphql');

const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');

const schema = buildSchema(typeDefs);

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 8000;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', graphqlHTTP({
    rootValue: resolvers,
    schema,
    graphiql: true,
    pretty: true,
  }));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`); // eslint-disable-line no-console
  });
});
