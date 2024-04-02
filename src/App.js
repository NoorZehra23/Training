import React, { useState, useEffect } from 'react';
import MyForm from './Components/MyForm';
import { Table } from './Components/Table'; 


const App = () => {
  const [rows, setRows] = useState([
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
  ]);
  
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };


  useEffect(() => {
  }, [rows]);

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);

  };  

  return (
    <div>
  <Table rows={rows} deleteRow={handleDeleteRow}/>
  <MyForm onSubmit={handleSubmit}/>
    </div>
  );
};

export default App;
