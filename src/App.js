import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import React, { useState } from 'react';
function App() {
  const [listData, setListData] = useState([]);
  const addData = (data) =>{
    const arrTemp = [...listData];
    arrTemp.push(data);
    setListData(arrTemp);
  }
  const headerTable = [
    {
      label: 'STT',
      value: 'id',
      style:'a',
    },
    {
      label: 'Ten',
      value: 'name',
      style:'a',
    },
    {
      label: 'Tuoi',
      value: 'age',
      style:'a',
    },
    {
      label: 'Dia chi',
      value: 'address',
      style:'a',
    },
  ]
  const data = [
    {
      id: '1',
      name: 'nguyen van a',
      age: '19',
      address: 'A9',
    },
    {
      id: '1',
      name: 'nguyen van b',
      age: '19',
      address: 'A9',
    },
    {
      id: '1',
      name: 'nguyen van c',
      age: '19',
      address: 'A9',
    },
    {
      id: '1',
      name: 'nguyen van d',
      age: '19',
      address: 'A9',
    }
  ]
  return (
    <div className="App">
      <Input addData={addData}></Input>
      <Table headerTable={headerTable} data={data} listData={listData}></Table>
    </div>
  );
}

export default App;
