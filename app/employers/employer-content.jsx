// @flow
import React, { PureComponent } from 'react';

import type { LinkRelation } from '../../lib/types';

/* eslint-disable react/no-unused-prop-types */
type Props = {
  readyStatus?: string,
  err?: Object,
  link: LinkRelation,
  fetchEmployer: Function,
  projects?: Array<Object>,
}
/* eslint-enable react/no-unused-prop-types */

class EmployerContent extends PureComponent<Props> {

  static defaultProps = {
    readyStatus: '',
    err: null,
    projects: [],
  }

  componentDidMount() {
    const { link, fetchEmployer } = this.props;
    fetchEmployer(link.href);
  }
  render() {
    const { projects } = this.props;
    return (
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    );
  }
}

export default EmployerContent;
