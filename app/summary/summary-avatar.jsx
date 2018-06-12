// @flow
import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import shortid from 'shortid';

import config from '../../lib/config';
import sharedStyle from '../../lib/SharedStyles';
import type { LinkRelation } from '../../lib/types';


type Props = {
  +alt: string,
  +links: Array<LinkRelation>,
}

export default ({ links, alt = 'profile image' }:Props) => (
  <Fragment>
    {links
      .filter(link => link.rel === 'avatar')
      .map(({ href }) => (
        <Avatar
          style={sharedStyle.styleBigAvatar}
          key={shortid.generate()}
          src={`${config.app.resumeDataAPIUrl}/${href}`}
          alt={alt}
        />
      ))}
  </Fragment>
);
