// @flow
import React, { Fragment } from 'react';

import EmployerAvatar from './employer-avatar';
import sharedStyle from '../../lib/SharedStyles';
import type { LinkRelation } from '../../lib/types';


type Props = {
  +name: string,
  +links: Array<LinkRelation>,
}

export default ({ links, name = 'profile image' }:Props) => (
  <Fragment>
    <EmployerAvatar links={links} alt={name} />
  </Fragment>
);
