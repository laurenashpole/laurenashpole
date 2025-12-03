export const HEADER = {
  home: {
    path: '/',
    label: 'Fonts by Lauren Ashpole',
  },
  default: [
    {
      path: '/fonts',
      label: 'Fonts',
    },
    {
      path: '/',
      label: 'Blog',
      external: {
        host: 'blog.laurenashpole.com',
      },
    },
    {
      path: '/contact',
      label: 'Contact',
    },
  ],
  admin: [
    {
      path: '/admin',
      label: 'Home',
      isExact: true,
    },
    {
      path: '/api/admin/logout',
      label: 'Logout',
    },
  ],
};
