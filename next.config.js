/** @type {import('next').NextConfig} */
/*
    Added following module.exports instead of commented code on 14-15
    to handle error when deploying to vercel
    Error: Collecting page data for undefined is still timing out after 2 attempts.
        See more info here https://nextjs.org/docs/messages/page-data-collection-timeout
*/

module.exports = {
  // time in seconds of no pages generating during static
  // generation before timing out
  staticPageGenerationTimeout: 1000,
};

// const nextConfig = {};
// module.exports = nextConfig;
