import React, {Component} from 'react';
import axios from 'axios';

class Table extends Component {
  state  = {rows: []};

  componentDidMount() {
    this.mergeTableRows().then(rows => this.setState({rows}));
  }

  fetchAges()  {
    return axios.get('http://5c37c33f7820ff0014d927c5.mockapi.io/msr/ages')
  }
  
  fetchNames() {
    return axios.get('http://5c37c33f7820ff0014d927c5.mockapi.io/msr/names')
  }

  async mergeTableRows() {
    const ages = await this.fetchAges();
    const names = await this.fetchNames();

    const rows = {};
    ages.data.concat(names.data).forEach(function(obj) {
      rows[obj.id] = Object.assign(rows[obj.id] || {}, obj)
    });
  
    return Array.from(Object.values(rows));
  }

  renderRows() {
    return this.state.rows.map( row => {
      return (
        <tr>
        <td data-label="Id">{row.id || "-"}</td>
        <td data-label="FirstName">{row.firstName || "-"}</td>
        <td data-label="LastName">{row.lastName || "-"}</td>
        <td data-label="Age">{row.age || "-"}</td>
      </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;