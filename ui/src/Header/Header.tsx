import React, { Component } from 'react';
import { HeaderWrapper, Tabs, Tab } from './style';
import { Link, withRouter } from 'react-router-dom';

export class HeaderInner extends Component<any> {
  render() {
    const {
      location: { pathname }
    } = this.props;

    return (
      <HeaderWrapper>
        <Tabs>
          <Tab className={pathname === '/' ? 'selected' : ''}>
            <Link to="/">Invited</Link>
          </Tab>
          <Tab className={pathname === '/accepted' ? 'selected' : ''}>
            <Link to="/accepted">Accepted</Link>
          </Tab>
        </Tabs>
      </HeaderWrapper>
    );
  }
}

export const Header = withRouter(HeaderInner);
