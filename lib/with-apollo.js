import React, { PureComponent } from 'react';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from 'react-apollo';
import fetch from 'fetch-everywhere';

const client = new ApolloClient({
  uri: '/graphql',
  fetch,
});

type Props = {

}

function withApollo(BaseComponent) {
  class ApolloApp extends PureComponent<Props> {
    render() {
      return (
        <ApolloProvider client={client}>
          <BaseComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }

  ApolloApp.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }
    return {};
  };

  return ApolloApp;
}

export default withApollo;
