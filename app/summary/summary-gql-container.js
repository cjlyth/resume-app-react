// @flow
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Summary from '../../components/summary';
import utils from '../utils';
import { app } from '../../lib/config';


const linkGetter = links => (rel: string) => {
  const l = utils.getLinkRelation(links, rel);
  return l.startsWith('http') ? l : `${app.resumeDataAPIUrl}/${l}`;
};

const SummaryData = () => (
  <Query
    query={gql`
      {
        summary(rels: ["avatar", "linkedin"]) {
          fullName: name
          currentTitle: title
          links {
            rel
            href
            }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const { links, ...rest } = data.summary;
      const getLink = linkGetter(links);
      return (
        <Summary
          avatarUrl={getLink('avatar')}
          linkedInUrl={getLink('linkedin')}
          {...rest}
        />
      );
    }}
  </Query>
);
export default SummaryData;
