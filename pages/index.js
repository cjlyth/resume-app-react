import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../lib/store';
import Summary from '../app/summary';

import withLayout from '../lib/with-layout';

type Props = {
  dispatch: Function
}

class Index extends PureComponent<Props> {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));
    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Fragment>
        <Summary />
      </Fragment>
    );
  }
}

export default connect()(withLayout(Index));
