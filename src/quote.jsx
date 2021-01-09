import React, { Component } from 'react';
class Quote extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <blockquote className="border-l-4 border-r-4 rounded-md border-gray-300 m-5">
          <span className="text-x1" id="quote">
            {this.props.quote}
          </span>
        </blockquote>
        <p className="text-3xl text-gray-900 m-4" id="author">
          {this.props.name}
        </p>
        <button
          id="button"
          className="p-2 rounded border-none outline-none text-gray-100 hover:text-gray-700 hover:bg-gray-400 bg-gray-500"
          type="button"
          onClick={this.props.onClick}
        >
          Change Quote
        </button>
      </React.Fragment>
    );
  }
}
export default Quote;