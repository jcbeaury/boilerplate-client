import React, { Component } from 'react'
import { Spin } from 'antd';

class Login extends Component {
  constructor(props) {
    super(props);
    props.auth.login();
  }

  render() {
    return (
      <Spin style={{ margin: 'auto' }} />
    )
  }
}

export default Login
