import React, { Component } from 'react'
import axios from 'axios'
import { List } from 'antd';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getGroups();
  }

  async getGroups() {
    const resp = await axios.get("http://localhost:3000/groups", { headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` } })
    this.setState({ groups: resp.data.groups });
  }

  render() {
    const { groups } = this.state;

    return (
      <div>
        <List
          header={<h1>Groups</h1>}
          bordered
          dataSource={groups}
          renderItem={group => (<List.Item>{group.name}</List.Item>)}
        />
      </div>
    )
  }
}

export default Groups
