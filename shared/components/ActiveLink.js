import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, isExact, children }) => {
  const router = useRouter();
  const isActive = isExact ? router.pathname === href : router.pathname.indexOf(href) !== -1;

  return (
    <Link href={href}>
      {cloneElement(children, { 'aria-current': isActive ? 'page' : null })}
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  isExact: PropTypes.bool,
  children: PropTypes.any
};

export default ActiveLink;