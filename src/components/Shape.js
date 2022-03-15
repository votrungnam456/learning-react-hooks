import React, { useEffect, useState } from 'react';
const Shape = (props) => {
  const [colorBox, setColorBox] = useState(()=>{
    const initColor = localStorage.getItem('color') || 'blue';
    return initColor;
  })
  const changeRandomColor = () => {
    const arrColor = ['blue', 'red', 'yellow', 'green']
    const newColor = arrColor[Math.floor(Math.random() * arrColor.length)];
    setColorBox(newColor)
    localStorage.setItem('color',newColor);
  }
  return (
    <div style={{backgroundColor:colorBox, width:100,height:100}} onClick={changeRandomColor}>
    </div>
  );
}

export default Shape;
