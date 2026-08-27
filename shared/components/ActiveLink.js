import Link from 'next/link';
import { useRouter } from 'next/router';

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

export default ActiveLink;
