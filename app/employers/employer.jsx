// @flow
import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


import LinkIcon from '@material-ui/icons/Link';

import EmployerAvatar from './employer-avatar';
import EmployerContent from './employer-content-container';
import EmployerAction from './employer-action';
import type { EmployerInfo } from '../../lib/types';
import { DateRange } from '../utils';
import LinkedInIcon from '../LinkedInIcon';

const cardActions = ['website'];

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
