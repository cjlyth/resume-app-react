// @flow
import React, { Fragment } from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button'

import sharedStyle from '../../lib/SharedStyles';
import type { LinkRelation } from '../../lib/types';


type Props = {
  +alt: string,
  +links: Array<LinkRelation>,
}

export default ({ links, alt }:Props) => (
  <Fragment>
    {links
      .filter(link => link.rel === 'website')
      .map(({ href }) => (
        <Button
          key={shortid.generate()}
          src={href}
          alt={alt}
          style={sharedStyle.styleEmployerAvatar}
        >
          website
        </Button>
      ))}
  </Fragment>
);
