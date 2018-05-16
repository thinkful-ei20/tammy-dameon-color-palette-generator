import React from 'react';

export default function Color(props){
  const colors = props.colors.map((color,index) => 
      <li key={index}>
        <strong>{color}</strong>
      </li>
  )


  return(
    console.log(colors),

    <div>
      {colors}
    </div>

  )
}