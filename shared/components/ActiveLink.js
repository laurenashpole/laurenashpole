import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const ActiveLink = ({ href, isExact, children, ...props }) => {
  const router = useRouter();
  const isActive = isExact
    ? router.pathname === href
    : router.pathname.indexOf(href) !== -1;

  return (
    <Link href={href} aria-current={isActive ? 'page' : undefined} {...props}>
      {children}
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  isExact: PropTypes.bool,
  children: PropTypes.any,
};

export default ActiveLink;
