import React, { useState } from 'react';

const Input = (props) =>{
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const addData = ()=>{
    props.addData({name:name,age:age});
    setName('');
    setAge(0);
  }
  return (
    <div>
        <label>Tên:</label>
        <input type="text" id="name" name="name" value={name} onChange={e=>setName(e.target.value)}/><br/>
        <label>Tuổi:</label>
        <input type="number" id="age" name="age" value={age} onChange={e=>setAge(e.target.value)}/><br/>
        <button type="submit" onClick={addData}>Submit</button>
    </div>
  );
}

export default Input;