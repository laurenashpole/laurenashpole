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
      label: 'Home',
      isExact: true
    },
    {
      url: '/api/admin/logout',
      label: 'Logout'
    }
  ]
};