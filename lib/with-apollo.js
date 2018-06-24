import React, { PureComponent } from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import { ApolloProvider } from 'react-apollo';
import fetch from 'fetch-everywhere';

const client = new ApolloClient({
  cache: new InMemoryCache(),
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
