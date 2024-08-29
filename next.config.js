module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'notary-api.dev.mygov.bd',
        // port: '8000',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },


  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}

