import React, { Component } from 'react'
import { Spin } from 'antd';

class Logout extends Component {
  constructor(props) {
    super(props);
    props.auth.logout(props.history);
  }

  render() {
    return (
      <Spin style={{ margin: 'auto' }} />
    )
  }
}

export default Logout
