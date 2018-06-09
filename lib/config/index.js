/* @flow */

module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    titleTemplate: 'C. Lyth - %s',
    resumeDataAPIUrl: 'https://cjlyth.github.io/resume-data/v1/',
    meta: [
      {
        name: 'description',
        content: 'Personal Resume site for Chris Lyth'
      }
    ]
  }
};