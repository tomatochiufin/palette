import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Color from 'color'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      colors: [
        {rgb: '#123456'},
        {rgb: '#234567'},
        {rgb: '#345678'},
        {rgb: '#456789'}
      ]
    };
    this.createColor = this.createColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.lighter     = this.lighter.bind(this);
    this.darker      = this.darker.bind(this);
  }

  createColor(){
    let randomColor = Math.floor(Math.random()* 255 + 1);
    this.state.colors.push({rgb: `hsl(${randomColor}, 70%, 70%)`});
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
    let stateColor = this.state.colors;
    let thisHex = stateColor[i].rgb;

    let rgbObj = Color(thisHex);
    let hslObj = rgbObj.hsl();

    let lighterColor = _.parseInt(hslObj.color[2])+10;
    hslObj.color[2] = lighterColor;

    let rgbArray = hslObj.rgb().array();
    let hex = "#";
    for(let i = 0 ; i< rgbArray.length ; i++){
      console.log(rgbArray[i]);
      hex += this.noOneWord(rgbArray[i]);
      console.log(hex);
    }

    stateColor[i].rgb = hex;
    this.setState(stateColor);
  }

  darker(i){
    let stateColor = this.state.colors;
    let thisHex = stateColor[i].rgb;

    let rgbObj = Color(thisHex);
    let hslObj = rgbObj.hsl();

    let darkerColor = _.parseInt(hslObj.color[2])-10;
    hslObj.color[2] = darkerColor;

    let rgbArray = hslObj.rgb().array();
    let hex = "#";
    for(let i = 0 ; i< rgbArray.length ; i++){
      console.log(rgbArray[i]);
      hex += this.noOneWord(rgbArray[i]);
      console.log(hex);
    }

    stateColor[i].rgb = hex;
    this.setState(stateColor);
  }

  noOneWord(num){
    let string = _.parseInt(num).toString(16);
    if(string.length <= 1){
      string = '0' + string;
    }
    return string
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
                let bcg = {background: color.rgb};
                  console.log(bcg);
                return (
                <li className="colors__one" key={"color" + i} style={bcg}>
                  {color.rgb}
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
