import React, { useEffect, useState } from 'react';
import { emptyData } from '../constants/constanstData';

const Table = (props) => {
  const [listData, setlistData] = useState(props.data);
  const [listHeder, setListHeader] = useState(props.headerTable)
  const [checkBoxAll, setCheckBoxAll] = useState(false);
  const [checked, setChecked] = useState({});
  useEffect(() => {
    setlistData(props.data);
  }, [props.data])
  useEffect(() => {
    setListHeader(props.headerTable);
  }, [props.headerTable])
  useEffect(() => {
    if (listHeder[0].config.checkBox) {
      const check = {};
      for (let i = 0; i < listData.length; i++) {
        check['checkBox' + i] = false;
      }
      setChecked(check);
    }
  }, [])
  useEffect(() => {
    if(checked['checkBox' + (listData.length - 1)] === undefined){
      setChecked((prevState) => {
        const newState = { ...prevState };
        newState['checkBox' + (listData.length - 1)] = false;
        return newState;
      });
    }
  }, [listData])
  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };
  const selectAll = (value) => {
    setCheckBoxAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };
  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckBoxAll(true);
    } else {
      setCheckBoxAll(false);
    }
  }, [checked,listData]);
  const tHeader = () => {
    return (
      <tr onClick={() => props.choseData(emptyData)} >
        {listHeder[0].config.checkBox ? <th><input id="checkBoxAll" type="checkbox" checked={checkBoxAll} onChange={(event) => selectAll(event.target.checked)} /></th> : ''}
        {listHeder[0].data.map((data, index) => {
          return (
            <th key={index} className={data.style}>{data.label}</th>
          )
        })}
      </tr>
    )
  }
  const tBody = () => {
    const keyArr = [];
    listHeder[0].data.map(data => {
      keyArr.push(data.value)
      return true;
    })
    return (
      listData.map((data, index) => {
        return (
          <tr onClick={() => props.choseData(data)} key={index}>
            {listHeder[0].config.checkBox ? <td><input checked={checked['checkBox' + index] !== undefined ? checked['checkBox' + index] : false} onChange={() => toggleCheck('checkBox' + index)} type="checkbox" /></td> : ''}
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