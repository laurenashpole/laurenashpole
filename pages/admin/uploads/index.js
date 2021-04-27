import * as fs from 'fs';
import PropTypes from 'prop-types';
import withPassport from '../../../middleware/passport';
import Admin from '../../../components/admin/layout/Admin';
import List from '../../../components/admin/shared/List';

const Uploads = ({ isAuthenticated, uploads }) => {
  return (
    <Admin isAuthenticated={isAuthenticated} title="Uploads">
      <List name="upload" items={uploads} />
    </Admin>
  );
};

export async function getServerSideProps (context) {
  const isAuthenticated = await withPassport(context.req, context.res, (req) => {
    return req.isAuthenticated();
  });

  const uploads = fs.readdirSync('./public/uploads/misc').map((file) => {
    return {
      name: file,
      url: `/uploads/misc/${file}`,
      _id: file
    };
  });

  return {
    props: {
      isAuthenticated,
      uploads: JSON.parse(JSON.stringify(uploads))
    }
  };
}

Uploads.propTypes = {
  isAuthenticated: PropTypes.bool,
  uploads: PropTypes.array
};

export default Uploads;