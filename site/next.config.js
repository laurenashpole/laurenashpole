module.exports = {
  experimental: {
    externalDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'bgljydntkoculytr.public.blob.vercel-storage.com',
      'cdn.sanity.io',
    ],
  },
  async redirects() {
    return [
      {
        source: '/downloads',
        destination: '/fonts',
        permanent: true,
      },
      {
        source: '/downloads/:slug',
        destination: '/fonts/:slug',
        permanent: true,
      },
      {
        source: '/amp/fonts/:slug',
        destination: '/fonts/:slug',
        permanent: true,
      },
      {
        source: '/fonts.html',
        destination: '/fonts',
        permanent: true,
      },
      {
        source: '/font39smooth.html',
        destination: '/fonts/39-smooth',
        permanent: true,
      },
      {
        source: '/downloads/thirty-nine-smooth',
        destination: '/fonts/39-smooth',
        permanent: true,
      },
      {
        source: '/fontbikes.html',
        destination: '/fonts/bikes',
        permanent: true,
      },
      {
        source: '/fontcandy.html',
        destination: '/fonts/candy-randy',
        permanent: true,
      },
      {
        source: '/fonthecubus.html',
        destination: '/fonts/hecubus',
        permanent: true,
      },
      {
        source: '/fontsewing.html',
        destination: '/fonts/sewing-patterns',
        permanent: true,
      },
      {
        source: '/fontsewing2.html',
        destination: '/fonts/sewing-patterns-2',
        permanent: true,
      },
      {
        source: '/downloads/sewing-patterns-two',
        destination: '/fonts/sewing-patterns-2',
        permanent: true,
      },
      {
        source: '/licensing',
        destination: '/fonts/licensing',
        permanent: true,
      },
      {
        source: '/licensing.html',
        destination: '/fonts/licensing',
        permanent: true,
      },
      {
        source: '/eula',
        destination: '/fonts/eula',
        permanent: true,
      },
    ];
  },
};
