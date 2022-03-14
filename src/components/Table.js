import React, { useEffect, useState } from 'react';

const Table = (props) => {
  const [listAdd, setListAdd] = useState(props.data);
  const [listHeder, setListHeader] = useState(props.headerTable)
  useEffect(() => {
    setListAdd(props.data);
    setListHeader(props.headerTable);
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
  const tBody = () => {
    const keyArr = [];
    listHeder.map(data => {
      keyArr.push(data.value)
    })
    return (
      listAdd.map((data, index) => {
        return (
          <tr key={index}>
            {
              keyArr.map((dataKey, indexKey) => {
                return (<td key={indexKey}>{data[dataKey]}</td>)
              })
            }
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