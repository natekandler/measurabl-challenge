import React, {Component} from 'react';
import axios from 'axios';
import { mergeRows } from '../utils/rowUtils';

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

    return mergeRows(ages.data, names.data)
  }

  renderRows() {
    return this.state.rows.map( row => {
      return (
        <tr key={row.id}>
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
        <table className="ui celled table">
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