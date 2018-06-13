// @flow
import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import SvgIcon from '@material-ui/core/SvgIcon';

import LinkIcon from '@material-ui/icons/Link';

import EmployerAvatar from './employer-avatar';
import EmployerContent from './employer-content-container';
import EmployerAction from './employer-action';
import type { EmployerInfo } from '../../lib/types';
import { DateRange } from '../utils';

const cardActions = ['website'];


function LinkedInIcon(props) {
  /* eslint-disable max-len */
  return (
    <SvgIcon {...props}>
      <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
    </SvgIcon>
  );
  /* eslint-enable max-len */
}


export default ({
  links, name, description, dates,
}:EmployerInfo) => (
  <Card>
    <CardHeader
      avatar={
        <EmployerAvatar links={links} alt={name} />
      }
      title={description}
      subheader={
        <DateRange dates={dates} />
      }
    />
    <CardContent>
      <EmployerContent link={links.find(e => e.rel === 'self')} />
    </CardContent>
    <CardActions disableActionSpacing>
      {links
        .filter(link => cardActions.includes(link.rel))
        .map(link => (
          <EmployerAction
            key={link.rel}
            link={link}
            name={name}
            IconComponent={LinkIcon}
          />
        ))}
      {links
        .filter(link => link.rel === 'linkedin')
        .map(link => (
          <EmployerAction
            key={link.rel}
            link={link}
            name={name}
            IconComponent={LinkedInIcon}
          />
        ))}
    </CardActions>
  </Card>
);
