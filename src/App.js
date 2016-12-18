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
        {rgb: '#456456'},
        {rgb: '#eded11'},
        {rgb: '#113678'},
        {rgb: '#2200ee'}
      ]
    };
    this.createColor = this.createColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.lighter     = this.lighter.bind(this);
    this.darker      = this.darker.bind(this);
    this.moreColor   = this.moreColor.bind(this);
    this.lessColor   = this.lessColor.bind(this);
    this.resetAll    = this.resetAll.bind(this);
    this.changePrevColor = this.changePrevColor.bind(this);
    this.changeNextColor = this.changeNextColor.bind(this);
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

  moreColor(i){
    let stateColor = this.state.colors;
    let thisHex = stateColor[i].rgb;

    let rgbObj = Color(thisHex);
    let hslObj = rgbObj.hsl();

    let darkerColor = _.parseInt(hslObj.color[1])+10;
    hslObj.color[1] = darkerColor;

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

  lessColor(i){
    let stateColor = this.state.colors;
    let thisHex = stateColor[i].rgb;

    let rgbObj = Color(thisHex);
    let hslObj = rgbObj.hsl();

    let lighterColor = _.parseInt(hslObj.color[1])-10;
    hslObj.color[1] = lighterColor;

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

  changePrevColor(i){
    let stateColor = this.state.colors;
    let thisHex = stateColor[i].rgb;

    let rgbObj = Color(thisHex);
    let hslObj = rgbObj.hsl();

    let lighterColor = _.parseInt(hslObj.color[0])-10;
    hslObj.color[0] = lighterColor;

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

  changeNextColor(i){
    let stateColor = this.state.colors;
    let thisHex = stateColor[i].rgb;

    let rgbObj = Color(thisHex);
    let hslObj = rgbObj.hsl();

    let lighterColor = _.parseInt(hslObj.color[0])+10;
    hslObj.color[0] = lighterColor;

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

  resetAll(){

  }

  keypressLighter(i, e){
    console.log(i);
    console.log(e);
  }



  render() {
	return (
	  <div className="App" onKeyPress={this.keypressLighter}>
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
          <ul className="colors">
            {this.state.colors.map((color, i)=>{
                let bcg = {background: color.rgb};
                  console.log(bcg);
                return (
                <li className="colors__list" key={"color" + i}>
                  <div className="colors__list--one" style={bcg}>{color.rgb}
                    <div className="colors__preview">
                      <div className="colors__preview--item colors__preview--north"></div>
                      <div className="colors__preview--item colors__preview--south"></div>
                      <div className="colors__preview--item colors__preview--east"></div>
                      <div className="colors__preview--item colors__preview--west"></div>
                      <div className="colors__preview--item colors__preview--prevColor"></div>
                      <div className="colors__preview--item colors__preview--nextColor"></div>
                    </div>

                  </div>
                  <a onClick={this.deleteColor.bind(this, i)}>X</a>
                  <br/>
                  <a onClick={this.lighter.bind(this, i)}>lighter</a>
                  <br/>
                  <a onClick={this.darker.bind(this, i)}>darker</a>
                  <br/>
                  <a onClick={this.lessColor.bind(this, i)}>less color</a>
                  <br/>
                  <a onClick={this.moreColor.bind(this, i)}>more color</a>
                  <br/>
                  <a onClick={this.changePrevColor.bind(this, i)}>prev color</a>
                  <br/>
                  <a onClick={this.changeNextColor.bind(this, i)}>next color</a>
                  <br/>
                  <a onClick={this.resetAll.bind(this, i)}>reset all</a>


                </li>
                )}
            )}
                <li className="color__list">
                  <div className="colors__list--one colors__list--dash" onClick={this.createColor}>new</div>
                </li>
          </ul>
          <button>Save</button>
		</div>
	  </div>
	);
  }
}

export default App;
