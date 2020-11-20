const withSass = require('@zeit/next-sass');
module.exports = withSass();

module.exports = {
    distDir: 'build',
    poweredByHeader: false,
};