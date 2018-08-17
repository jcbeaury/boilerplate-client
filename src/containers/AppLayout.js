import React, { Component } from 'react'
import AppHeader from '../components/AppHeader'
import AppSider from '../components/AppSider'

import { Spin, Layout, } from 'antd';
const { Content } = Layout;

class AppLayout extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Layout style={{height:"100vh"}}>
        {!isAuthenticated &&
          <Spin style={{margin: 'auto'}} />
        }

        {isAuthenticated &&
          <Layout>
            <AppHeader />

            <Layout>
              <AppSider />

              <Layout style={{ padding: 24 }}>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  Content
                </Content>
              </Layout>
            </Layout>
          </Layout>
        }
      </Layout>
    )
  }
}

export default AppLayout
