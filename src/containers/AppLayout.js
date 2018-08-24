import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SessionExpired from '../auth/SessionExpired'
import AppHeader from '../components/AppHeader'
import AppSider from '../components/AppSider'
import Groups from './Groups'
import Employees from './Employees'
import { Layout } from 'antd';
const { Content } = Layout;

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.authenticateIfNeeded();
  }

  authenticateIfNeeded() {
    if (!this.props.auth.isAuthenticated()) {
      this.props.history.push('/login');
    }
  }

  render() {
    const { auth } = this.props;

    return (
      <Layout>
        {!auth.isAuthenticated() && <SessionExpired />}

        {auth.isAuthenticated() &&
          <Layout>
            <AppHeader {...this.props} />

            <Layout>
              <AppSider />

              <Layout style={{ padding: 24 }}>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route path="/groups" render={(props) => <Groups {...props} />} />
                    <Route path="/employees" render={(props) => <Employees {...props} />} />
                    <Redirect to="/groups" />
                  </Switch>
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
