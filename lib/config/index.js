/* @flow */

module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    resumeDataAPIUrl: 'https://cjlyth.gitlab.io/resume-data/v1/',
    meta: [
      {
        name: 'description',
        content: 'Personal Resume site for Chris Lyth',
      },
    ],
  },
};
