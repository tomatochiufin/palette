import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      colors: [
        {rgba: '#199'},
        {rgba: '#919'},
        {rgba: '#991'},
        {rgba: '#469'}
      ]
    };
    this.createColor = this.createColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
  }

  createColor(){
    this.state.colors.push({rgba: '#098'});
    let colors = this.state.colors;
    this.setState(colors);
  }

  deleteColor(i){
    this.state.colors.splice(i, 1);
    let colors = this.state.colors;
    this.setState(colors);

  }

  render() {
	return (
	  <div className="App">
		<div className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h2>Color picker</h2>
		</div>
		<p className="App-intro">
		  fast to pick color!!
		</p>
		<div>
          <h2> color list</h2>
          <p>{this.state.date.toLocaleTimeString()}</p>
          <button onClick={this.createColor}>create new</button>
          <ul className="colors">
            {this.state.colors.map((color, i)=>{
                let bcg = {background: color.rgba};
                return (
                <li className="colors__one" key={"color" + i} style={bcg} onClick={this.deleteColor.bind(this, i)}>
                    {color.rgba}
                </li>
                )}
            )}
          </ul>
		</div>
	  </div>
	);
  }
}

export default App;
