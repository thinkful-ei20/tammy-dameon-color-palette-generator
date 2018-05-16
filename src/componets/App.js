import React  from 'react';
import './App.css';
import Navbar from './Navbar';
import ColorList from './ColorList';


export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        colors: ['red', 'yellow','orange']
      }
    }
  render() {

    return (
      <div className="App">
        <Navbar />
        <h1>
          Color Generator
        </h1>
        <ColorList colors={this.state.colors} />
      </div>
    );
  }
}

