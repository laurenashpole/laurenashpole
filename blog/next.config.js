module.exports = {
  reactStrictMode: true,
  async redirects () {
    return [
      {
        source: '/post/:id/amp',
        destination: '/post/:id',
        permanent: true
      },
    ];
  }
}
