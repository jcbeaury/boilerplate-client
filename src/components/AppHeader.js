import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <div style={{
          width: '120px',
          height: '31px',
          background: 'rgba(255,255,255,.2)',
          margin: '16px 28px 16px 0',
          float: 'left'
        }} />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default AppHeader
