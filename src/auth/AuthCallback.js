import React, { Component } from 'react'
import { Spin } from 'antd';

class AuthCallback extends Component {
  constructor(props) {
    super(props);
    if (/access_token|id_token|error/.test(props.location.hash)) {
      props.auth.handleAuthentication(props.history);
    } else {
      props.history.push('/');
    }
  }

  render() {
    return (
      <Spin style={{ margin: 'auto' }} />
    )
  }
}

export default AuthCallback
