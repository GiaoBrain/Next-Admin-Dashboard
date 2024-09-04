/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
        locale: false
      }
    ]
  },

  // TODO: below line is added to resolve twice event dispatch in the calendar reducer
  reactStrictMode: false
}

module.exports = nextConfig
