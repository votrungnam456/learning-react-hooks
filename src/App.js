import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import React, { useState } from 'react';
function App() {
  const [dataChose, setDataChose] = useState({});
  const [dataTable, setDataTable] = useState([
    {
      id: 1,
      name: 'nguyen van a',
      age: 19,
      address: 'A9',
      hobby: 'abc'
    },
    {
      id: 2,
      name: 'nguyen van b',
      age: 19,
      address: 'A9',
      hobby: 'abc'
    },
    {
      id: 3,
      name: 'nguyen van c',
      age: 19,
      address: 'A9',
      hobby: 'abc'
    },
    {
      id: 4,
      name: 'nguyen van d',
      age: 19,
      address: 'A9',
      hobby: 'abc'
    }
  ])
  const headerTable = [
    {
      data: [{
        label: 'STT',
        value: 'id',
        style: 'a',
        type: 'number',
      },
      {
        label: 'Ten',
        value: 'name',
        style: 'a',
        type: 'text',
      },
      {
        label: 'Tuoi',
        value: 'age',
        style: 'a',
        type: 'number',
      },
      {
        label: 'Dia chi',
        value: 'address',
        style: 'a',
        type: 'text',
      },
      {
        label: 'So thich',
        value: 'hobby',
        style: 'a',
        type: 'text',
      },],
      config: {
        // checkBox: true
      }
    }
  ]
  const choseData = (data) => {
    setDataChose(data);
  }
  const addData = (data) => {
    setDataTable((prevState) => {
      const newState = [...prevState, data];
      return newState;
    });
  }
  return (
    <div className="App">
      <Input headerTable={headerTable} dataChose={dataChose} addData={(data) => addData(data)}></Input>
      <Table headerTable={headerTable} data={dataTable} choseData={(data) => choseData(data)}></Table>
    </div>
  );
}

export default App;
