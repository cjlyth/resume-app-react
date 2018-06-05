import React, { PureComponent } from 'react';
import Router from 'next/router';
import { User as UserType } from '../lib/types';

let globalUser = null;

type Props = {
  user: UserType,
  isFromServer: boolean
}

export default (
  Page,
  { loginRequired = true, logoutRequired = false, adminRequired = false } = {},
) =>
  class BaseComponent extends PureComponent<Props> {
    static defaultProps = {
      user: null,
    };

    static async getInitialProps(ctx) {
      const isFromServer = !!ctx.req;
      const user = ctx.req ? ctx.req.user && ctx.req.user.toObject() : globalUser;

      if (isFromServer && user) {
        user._id = user._id.toString();
      }

      const props = { user, isFromServer };

      if (Page.getInitialProps) {
        Object.assign(props, (await Page.getInitialProps(ctx)) || {});
      }

      return props;
    }

    componentDidMount() {
      const { user } = this.props;

      if (this.props.isFromServer) {
        globalUser = this.props.user;
      }

      if (loginRequired && !logoutRequired && !user) {
        Router.push('/login');
        return;
      }

      if (adminRequired && (!user || !user.isAdmin)) {
        Router.push('/');
      }

      if (logoutRequired && user) {
        Router.push('/');
      }
    }

    render() {
      const { user } = this.props;

      if (loginRequired && !logoutRequired && !user) {
        return null;
      }

      if (adminRequired && (!user || !user.isAdmin)) {
        return null;
      }

      if (logoutRequired && user) {
        return null;
      }

      return <Page {...this.props} />;
    }
  };
