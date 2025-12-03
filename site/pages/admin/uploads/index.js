import { list } from '@vercel/blob';
import PropTypes from 'prop-types';

import Admin from '../../../components/admin/layout/Admin';
import List from '../../../components/admin/shared/List';
import withPassport from '../../../middleware/passport';

const Uploads = ({ isAuthenticated, uploads }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title="Uploads">
      <List name="upload" items={uploads} />
    </Admin>
  );
};

export async function getServerSideProps(context) {
  const isAuthenticated = await withPassport(
    context.req,
    context.res,
    (req) => {
      return req.isAuthenticated();
    },
  );

  const { blobs } = await list({
    prefix: 'misc',
  });

  const uploads = blobs.map((blob) => ({
    name: blob.pathname,
    url: blob.url,
    _id: blob.pathname,
  }));

  return {
    props: {
      isAuthenticated,
      uploads: JSON.parse(JSON.stringify(uploads)),
    },
  };
}

Uploads.propTypes = {
  isAuthenticated: PropTypes.bool,
  uploads: PropTypes.array,
};

export default Uploads;
