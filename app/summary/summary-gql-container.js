// @flow
import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import Summary from '../../components/summary';
import utils from '../utils';
import { Loading, Error } from '../loading';
import { toggleSettings } from '../settings/settings-actions';


const mapDispatchToProps = dispatch => ({
  toggleSettings: () => {
    dispatch(toggleSettings());
  },
  fetchSummary: () => {},
});

function mapStateToProps(state) {
  const { settings } = state;
  const { settingsOpen } = settings;
  return { settingsOpen };
}

const SummaryData = props => (
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
          {...props}
        />
      );
    }}
  </Query>
);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryData);
