export function getActiveLink (links, pathname) {
  const activeLinks = links.filter((link) => {
    if (link.isExact) {
      return link.url === pathname;
    }

    return pathname.indexOf(link.url) !== -1;
  });

  return activeLinks.length ? activeLinks[0].url : '';
}