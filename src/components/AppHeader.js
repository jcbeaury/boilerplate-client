import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
const { Header } = Layout;

class AppHeader extends Component {
  handleLogoutClick = () => {
    this.props.history.push('/logout');
  }

  render() {
    return (
      <Header>
        <div style={{ width: '120px', height: '31px', float: 'left' }}>
          <p style={{ color: '#fff' }}>[ logo here ]</p>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item
            key="logout"
            style={{ float: 'right' }}
            onClick={ this.handleLogoutClick }
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default AppHeader
