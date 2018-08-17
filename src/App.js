import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Auth from './Auth'
import AppLayout from './containers/AppLayout'
import { Spin } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: new Auth() };
  }

  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.state.auth.handleAuthentication();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={(props) => <AppLayout auth={this.state.auth} {...props} />} />
          <Route path="/authenticate" render={(props) => {
            this.handleAuthentication(props);
            return <Spin style={{margin: 'auto'}} />
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
