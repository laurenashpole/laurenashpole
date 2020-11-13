export const NAV_LINKS = {
  default: [
    {
      url: '/fonts',
      label: 'Fonts'
    },
    {
      url: 'https://blog.laurenashpole.com',
      label: 'Blog',
      isExternal: true
    },
    {
      url: '/contact',
      label: 'Contact'
    }
  ],
  admin: [
    {
      url: '/admin',
      label: 'Fonts',
      isExact: true
    },
    {
      url: '/admin/fonts/create',
      label: 'Add Font'
    },
    {
      url: '/api/admin/logout',
      label: 'Logout'
    }
  ]
};