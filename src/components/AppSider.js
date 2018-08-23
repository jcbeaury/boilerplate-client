import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class AppSider extends Component {
  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          selectedKeys={[window.location.pathname]}
        >
          <Menu.Item key="/groups">
            <Link to={'/groups'}>
              <Icon type="bank" />
              <span>Groups</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/employees">
            <Link to={'/employees'}>
              <Icon type="team" />
              <span>Employees</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default AppSider
