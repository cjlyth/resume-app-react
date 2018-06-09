import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Summary from '../app/summary';

import withLayout from '../lib/with-layout';


const Index = () => (
  <Fragment>
    <Summary />
  </Fragment>
);

export default connect()(withLayout(Index));
