// @flow
import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import config from '../../lib/config';
import type { LinkRelation } from '../../lib/types';


type Props = {
  +name: string,
  +link: LinkRelation,
  IconComponent: Function
}

export default ({ name, link, IconComponent }:Props) => (
  <IconButton
    title={`Open ${name} ${link.rel}`}
    target="_blank"
    aria-label={`Open ${name} ${link.rel}`}
    href={
      link.href.startsWith('http')
        ? link.href
        : `${config.app.resumeDataAPIUrl}/${link.href}`
    }
  >
    <IconComponent />
  </IconButton>
);
