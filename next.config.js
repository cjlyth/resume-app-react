// @flow
// https://cjlyth.gitlab.io/resume-app
module.exports = Object.assign({}, process.env.CI ? {
  assetPrefix: '/resume-app',
} : {});
