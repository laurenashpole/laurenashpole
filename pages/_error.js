import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';
import Well from '../components/shared/Well';

const Error = ({ statusCode }) => {
  return (
    <Layout>
      <Well size="medium">
        <h1>{statusCode && `${statusCode} - `}Something went wrong!</h1>

        <div>
          <p>
            {statusCode ? `An error ${statusCode} occurred on server.` : 'An error occurred on client.'}
          </p>

          <p>If the issue persists, don&apos;t hesitate to <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} title={process.env.NEXT_PUBLIC_EMAIL}>contact me</a>.</p>
        </div>
      </Well>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

Error.propTypes = {
  statusCode: PropTypes.number
};

export default Error;