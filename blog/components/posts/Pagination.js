import Link from 'next/link';

import Container from '../../../shared/components/Container.js';
import styles from './Pagination.module.css';

const Pagination = ({ pagination, paginationPath }) => {
  return (
    <Container>
      <ul className={styles.container}>
        {pagination.prevPage && (
          <li className={styles.prev}>
            <Link
              href={
                pagination.prevPage === 2
                  ? '/'
                  : `${paginationPath ? paginationPath : ''}/page/${pagination.prevPage}`
              }
              rel="prev"
              data-ga-category="blog pagination"
              data-ga-click="true"
            >
              Prev
            </Link>
          </li>
        )}

        {pagination.nextPage && (
          <li className={styles.next}>
            <Link
              href={`${paginationPath ? paginationPath : ''}/page/${pagination.nextPage}`}
              rel="next"
              data-ga-category="blog pagination"
              data-ga-click="true"
            >
              Next
            </Link>
          </li>
        )}
      </ul>
    </Container>
  );
};

export default Pagination;
