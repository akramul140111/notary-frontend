module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'notary-api.stage.mygov.bd',
        port: '80',
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

