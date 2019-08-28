import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { sendPageview } from '../utilities/analytics';

class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);

      if (this.props.enableAnalytics) {
        sendPageview();
      }
    }
  }

  render () {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any,
  enableAnalytics: PropTypes.bool
};

export default withRouter(ScrollToTop)