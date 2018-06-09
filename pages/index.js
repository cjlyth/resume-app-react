import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Summary from '../app/summary';
import Employers from '../app/employers';

import withLayout from '../lib/with-layout';


const Index = () => (
  <Fragment>
    <Summary />
    <Employers />
  </Fragment>
);

export default connect()(withLayout(Index));
