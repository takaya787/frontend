const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true,
})

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    BASE_URL: process.env.BASE_URL,
  }
}
