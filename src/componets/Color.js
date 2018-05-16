import React from 'react';
import './Color.css';
export default function Color(props){

  const colors = props.colors.map((color,index) => 
      <li key={index} index={index} 
        className="color"
        onClick={() => props.onClick(index)}
        style={{backgroundColor: color}}>
      </li>
  )


  return(
    console.log(colors),

    <div>
      {colors}
    </div>

  )
}