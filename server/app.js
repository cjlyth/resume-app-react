const { buildSchema } = require('graphql');

const axios = require('axios');

const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');


const schema = buildSchema(`
  type SummaryData {
    name: String,
    nameSmall: String,
    title: String,
    titleSmall: String,
    links: [LinkRelation]
  }
  
  type LinkRelation {
    rel: String,
    href: String
  }
  
  type User {
    id: ID,
    name: String,
    nameSmall: String,
    title: String,
    titleSmall: String,
    birthday: Birthday,
  }

  type Birthday {
    month: String,
  }  
  type Query {
    me(nameSmall: String): SummaryData,
    hello: String,
  }
`);
const root = {
  me: async ({nameSmall}) => await axios.get('https://cjlyth.gitlab.io/resume-data/v1/summary.json')
    .then(({ data }) => {
      console.log('data', data);
      console.log('nameSmall', nameSmall);
      return data;
    }),

};

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 8000;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', graphqlHTTP({
    rootValue: root,
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
