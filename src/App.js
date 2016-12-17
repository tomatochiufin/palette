import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Color from 'color';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      colors: [
        {rgba: 'hsl(255, 70%, 70%)'},
        {rgba: 'hsl(155, 70%, 70%)'},
        {rgba: 'hsl(215, 70%, 70%)'},
        {rgba: 'hsl(50, 70%, 70%)'}
      ]
    };
    this.createColor = this.createColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.lighter     = this.lighter.bind(this);
    this.darker      = this.darker.bind(this);
  }

  createColor(){
    let randomColor = Math.floor(Math.random()* 255 + 1);
    this.state.colors.push({rgba: `hsl(${randomColor}, 70%, 70%)`});
    let colors = this.state.colors;
    console.log(colors);
    this.setState(colors);
  }

  deleteColor(i){
    this.state.colors.splice(i, 1);
    let colors = this.state.colors;
    this.setState(colors);

  }

  lighter(i){
    console.log(i);
    console.log(this.state.colors[i]);
    let color = Color(this.state.colors[i].rgba);
    console.log(color);
    let rgb = color.rgb();
    console.log(rgb);
  }

  darker(i){

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
                  console.log(bcg);
                return (
                <li className="colors__one" key={"color" + i} style={bcg}>
                  {color.rgba}
                  <a onClick={this.deleteColor.bind(this, i)}>X</a>
                  <br/>
                  <a onClick={this.lighter.bind(this, i)}>lighter</a>
                  <br/>
                  <a onClick={this.darker.bind(this, i)}>darker</a>
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
