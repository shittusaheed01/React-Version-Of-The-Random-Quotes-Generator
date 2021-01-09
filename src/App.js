import React from "react";
import "./App.css";
import data from "./data"
import Quote from './quote';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:data,
      random:0,
    }
  }

  handleClick = () => {
    let randomNumber = Math.floor(Math.random() * this.state.data.length)
    this.setState({random : randomNumber});
    console.log(this.state.random, randomNumber, this.state.data[this.state.random])
  }

  name = () => {

  }

  render() {
    return (
      <div className="flex-1 capitalize min-h-screen flex items-center text-center justify-center bg-blue-300">
        <div className="max-w-lg shadow-2xl bg-white rounded-2xl p-8 ">
          <h3 className="text-2xl text-gray-700">
            This is a random quotes generator
          </h3>
          <Quote
            onClick={this.handleClick}
            name={this.state.data[this.state.random].name}
            quote={this.state.data[this.state.random].quote}
          />
        </div>
      </div>
    );
  }
}

export default App;
