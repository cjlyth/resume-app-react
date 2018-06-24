import React, { PureComponent } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getContext from '../lib/context';

const progWrapper = (progFn: Function) => {
  if (typeof window !== 'undefined') {
    progFn();
  }
};

Router.onRouteChangeStart = () => progWrapper(NProgress.start);
Router.onRouteChangeComplete = () => progWrapper(NProgress.done);
Router.onRouteChangeError = () => progWrapper(NProgress.done);

type Props = {
  pageContext: Object
}

function withLayout(BaseComponent) {
  class StyledApp extends PureComponent<Props> {
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

  StyledApp.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }
    return {};
  };

  return StyledApp;
}

export default withLayout;
