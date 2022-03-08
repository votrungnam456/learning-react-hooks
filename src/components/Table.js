import React, { useEffect, useState } from 'react';

const Table = (props) => {
  const [listAdd, setListAdd] = useState(props.data);
  const [listHeder, setListHeader] = useState(props.headerTable)
  useEffect(() => {
    setListAdd(props.headerTable);
  }, [props])

  const choseData = (name, age) => {
    console.log(name, age);
  }
  const tHeader = () => {
    return (
      <tr>
        {listHeder.map((data, index) => {
          return (
            <th key={index} className={data.style}>{data.label}</th>
          )
        })}
      </tr>
    )
  }
  const tBody = () =>{
    return (
      listAdd.map((data,index) =>{
        return (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.age}</td>
          </tr>
        )
      })
    )
  }
  return (
    <div>
      <table>
        <thead>
          {tHeader()}
        </thead>
        <tbody>
          {tBody()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;