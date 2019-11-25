import React, { Component } from 'react';
import { HeaderWrapper, Tabs, Tab } from './style';
import { Link, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { PATH } from '../shared/lib/raoutes';

export class HeaderInner extends Component<RouteComponentProps> {
  render() {
    const {
      location: { pathname }
    } = this.props;

    return (
      <HeaderWrapper>
        <Tabs>
          <Tab className={pathname === PATH.INVITED ? 'selected' : ''}>
            <Link to="/">Invited</Link>
          </Tab>
          <Tab className={pathname === PATH.ACCEPTED ? 'selected' : ''}>
            <Link to="/accepted">Accepted</Link>
          </Tab>
        </Tabs>
      </HeaderWrapper>
    );
  }
}

export const Header = withRouter(HeaderInner);
