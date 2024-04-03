import React, { Component } from 'react';
import MyForm from './Components/MyForm';
import Table from './Components/Table'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          name: "Ali",
          age: 20,
          email: "ali@gmail.com",
          gender: "Male",
          employment: "Unemployed"
        },
        {
          name: "Sara",
          age: 25,
          email: "sara@example.com",
          gender: "Female",
          employment: "Employed"
        },
        {
          name: "John",
          age: 30,
          email: "john@example.com",
          gender: "Male",
          employment: "Employed"
        },
        {
          name: "Emily",
          age: 22,
          email: "emily@example.com",
          gender: "Female",
          employment: "Unemployed"
        },
      ]
    };
  }

  handleDeleteRow = (targetIndex) => {
    this.setState({
      rows: this.state.rows.filter((_, index) => index !== targetIndex)
    });
  };

  handleSubmit = (newRow) => {
    this.setState({
      rows: [...this.state.rows, newRow]
    });
  };

  render() {
    const { rows } = this.state;

    return (
      <div>
        <Table rows={rows} deleteRow={this.handleDeleteRow}/>
        <MyForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
