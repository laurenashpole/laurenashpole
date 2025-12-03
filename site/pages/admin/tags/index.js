import PropTypes from 'prop-types';
import { findAll } from '../../../utils/tags';
import withPassport from '../../../middleware/passport';
import Admin from '../../../components/admin/layout/Admin';
import List from '../../../components/admin/shared/List';

const Tags = ({ isAuthenticated, tags }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title="Tags">
      <List name="tag" items={tags} />
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  const tags = await (isAuthenticated ? findAll() : Promise.resolve([]));

  return {
    props: {
      isAuthenticated,
      tags: JSON.parse(JSON.stringify(tags))
    }
  };
}

Tags.propTypes = {
  isAuthenticated: PropTypes.bool,
  tags: PropTypes.array
};

export default Tags;