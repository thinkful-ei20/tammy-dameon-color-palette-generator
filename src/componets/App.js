import React  from 'react';
import './App.css';
import Navbar from './Navbar';
import ColorList from './ColorList';


const NEW_COLORS = ['purple', 'orange', 'green','pink','lightblue',
'brown', 'black'];

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        colors: ['red', 'yellow','blue', 'slateblue']
       

      }
      this.handleClick= this.handleClick.bind(this);
      
      }

      handleClick(index){
        let randomIndexNumber = Math.floor(Math.random()*7);
        console.log('index',index);
        let colors = this.state.colors;
        colors[index] = NEW_COLORS[randomIndexNumber];
        this.setState({colors})
      }

      
  render() {
    

    return (
      console.log(this.state.colors),
      <div className="App">
        <Navbar />
        <h1>
          Color Generator
        </h1>
        <ColorList  colors={this.state.colors} onClick={this.handleClick}/>
      </div>
    );
  }
}

