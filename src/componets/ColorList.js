import React from 'react';
import Color from './Color';
import './ColorList.css';

export default function ColorList(props){
  return(
    
    <div className="color-list-container">
      I will hold the colors
      <Color colors={props.colors} onClick={props.onClick} />
    </div>
  )
}