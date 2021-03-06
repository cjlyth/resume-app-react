const axios = require('axios');

const typeDefs = `
  type SummaryData {
    name: String,
    nameSmall: String,
    title: String,
    titleSmall: String,
    links(rel: String): [LinkRelation]
  }
  
  type LinkRelation {
    rel: String,
    href: String
  }
  
  type Query {
    summary(nameSmall: String, rels: [String]): SummaryData,
  }
`;

const summary = async (obj, { rels }) =>
  axios.get('https://cjlyth.gitlab.io/resume-data/v1/summary.json')
    .then(({ data }) => {
      const { links, ...remaining } = data;
      return {
        ...remaining,
        links: rels
          ? links.filter(({ rel }) => rels.includes(rel))
          : links,
      };
    });

const resolvers = {
  Query: {
    summary,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
