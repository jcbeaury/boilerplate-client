import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppLayout from './containers/AppLayout'
import Authenticate from './auth/Authenticate'
import Login from './auth/Login'
import Logout from './auth/Logout'
import Auth from './auth/Auth'
import { Layout } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: new Auth() };
  }

  render() {
    const { auth } = this.state;

    return (
      <BrowserRouter>
        <Layout style={{height:"100vh"}}>
          <Switch>
            <Route path="/authenticate" render={(props) => <Authenticate auth={auth} {...props} />} />
            <Route path="/login" render={(props) => <Login auth={auth} {...props} />} />
            <Route path="/logout" render={(props) => <Logout auth={auth} {...props} />} />
            <Route render={(props) => <AppLayout auth={auth} {...props} />} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
