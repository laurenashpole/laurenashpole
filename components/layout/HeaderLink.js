import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderLink = ({ href, isExact, activeClassName, children }) => {
  const router = useRouter();
  const isActive = isExact ? router.pathname === href : router.pathname.indexOf(href) !== -1;

  return (
    <Link href={href}>
      {React.cloneElement(children, { className: `${children.props.className || ''} ${isActive ? activeClassName : ''}` })}
    </Link>
  );
};

HeaderLink.propTypes = {
  href: PropTypes.string,
  isExact: PropTypes.bool,
  activeClassName: PropTypes.string,
  children: PropTypes.any
};

export default HeaderLink;