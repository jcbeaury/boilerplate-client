import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SessionExpired extends Component {
  render() {
    return (
      <div style={{ margin: 'auto' }}>
        <h2>Your session has expired, please <Link to={'/login'}>log in</Link> again.</h2>
      </div>
    )
  }
}

export default SessionExpired
