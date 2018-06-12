// @flow
import React, { Fragment } from 'react';
import shortid from 'shortid';

import config from '../../lib/config';
import sharedStyle from '../../lib/SharedStyles';
import type { LinkRelation } from '../../lib/types';


type Props = {
  +alt: string,
  +links: Array<LinkRelation>,
}

export default ({ links, alt }:Props) => (
  <Fragment>
    {links
      .filter(link => link.rel === 'logo')
      .map(({ href }) => (
        <img
          key={shortid.generate()}
          src={`${config.app.resumeDataAPIUrl}/${href}`}
          alt={alt}
          style={sharedStyle.styleEmployerAvatar}
        />
      ))}
  </Fragment>
);
