import React, { useState, useEffect } from 'react';

const Input = (props) => {
  const [listHeder, setListHeader] = useState(props.headerTable)

  const setFirstData = () => {
    const setData = {};
    listHeder[0].data.map(data => {
      if (data.type === 'number') {
        setData[data.value] = 0;
      } else {
        setData[data.value] = '';
      }
      return true;
    })
    return setData;
  }
  const [dataInput, setDataInput] = useState(setFirstData)
  useEffect(() => {
    setListHeader(props.headerTable);
  }, [props.headerTable, listHeder])
  useEffect(() => {
    if (Object.keys(props.dataChose).length !== 0) {
      setDataInput(props.dataChose);
    }
  }, [props.dataChose])
  const dataInputChange = (inputName, data) => {
    setDataInput((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = data
      return newState;
    });
  };
  const addData = () => {
    props.addData(dataInput)
  }
  const renderInput = () => {
    return (
      <div>
        {listHeder[0].data.map((data, index) => {
          return (
            <div key={index}>
              <span>{data.label}: </span>
              <input type={data.type} id={data.label} name={data.label} onChange={(e) => dataInputChange(data.value, e.target.value)} value={dataInput[data.value] !== undefined ? dataInput[data.value] : ''} /><br />
            </div>
          )
        })}
        <button type="submit" onClick={addData}>Submit</button>
      </div>
    )
  }
  return (
    <div>
      {renderInput()}
    </div>
  );
}

export default Input;