import React, { Component } from 'react'
import AppHeader from '../components/AppHeader'
import AppSider from '../components/AppSider'
import { Layout } from 'antd';
const { Content } = Layout;

class AppLayout extends Component {
  constructor(props) {
    super(props);
    if (!props.auth.isAuthenticated()) {
      props.history.push('/login');
    }
  }

  render() {
    const { auth } = this.props;

    return (
      <Layout>
        {auth.isAuthenticated() &&
          <Layout>
            <AppHeader {...this.props} />

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
