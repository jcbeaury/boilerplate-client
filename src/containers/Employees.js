import React, { Component } from 'react'
import axios from 'axios'
import { List } from 'antd';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getEmployees();
  }

  async getEmployees() {
    const resp = await axios.get("http://localhost:3000/employees", { headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` } })
    this.setState({ employees: resp.data.employees });
  }

  render() {
    const { employees } = this.state;

    return (
      <div>
        <List
          header={<h1>Employees</h1>}
          bordered
          dataSource={employees}
          renderItem={employee => (<List.Item>{employee.name}</List.Item>)}
        />
      </div>
    )
  }
}

export default Employees
