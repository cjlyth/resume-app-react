import React, { PureComponent } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getContext from '../lib/context';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type Props = {
  pageContext: Object
}

function withLayout(BaseComponent) {
  class App extends PureComponent<Props> {
    constructor(props, context) {
      super(props, context);
      this.pageContext = this.props.pageContext || getContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <CssBaseline />
          <BaseComponent {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  App.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }
    return {};
  };

  return App;
}

export default withLayout;
