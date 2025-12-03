module.exports = {
  experimental: {
    externalDir: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/post/:id/amp',
        destination: '/post/:id',
        permanent: true,
      },
    ];
  },
};
