import Link from 'next/link';
import PropTypes from 'prop-types';

import Container from '../../../shared/components/Container.js';
import styles from './Pagination.styles.js';

const Pagination = ({ pagination, paginationPath }) => {
  return (
    <Container>
      <ul className="pagination">
        {pagination.prevPage && (
          <li className="pagination__item pagination__item--prev">
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
          <li className="pagination__item pagination__item--next">
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

        <style jsx global>
          {styles}
        </style>
      </ul>
    </Container>
  );
};

Pagination.propTypes = {
  posts: PropTypes.array,
  pagination: PropTypes.object,
};

export default Pagination;
