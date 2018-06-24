// @flow
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Summary from '../../components/summary';
import utils from '../utils';
import { Loading, Error } from '../loading';

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
      if (loading) return <Loading>Loading summary...</Loading>;
      if (error) return <Error>Error loading summary</Error>;
      const { links, ...rest } = data.summary;
      const getLink = utils.linkGetter(links);
      return (
        <Summary
          avatarUrl={getLink('avatar')}
          linkedInUrl={getLink('linkedin')}
          {...rest}
          toggleSettings={() => {}}
        />
      );
    }}
  </Query>
);
export default SummaryData;
