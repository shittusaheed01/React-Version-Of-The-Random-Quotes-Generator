import React, {useState} from 'react';

import ReactMarkdown from "react-markdown"

import "./App.css"

function App(props) {
  const [text, setText] = useState("")
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
      <div className="container">
        <div className="editor">
          <h3 className="title">Editor:</h3>
          <textarea placeholder="enter your markdown here" onChange={handleChange} value={text} />
        </div>
        <div className="previewer">
          <h3 className="title">Previewer:</h3>
          {/* <div className="result" /> */}
          <div className="markdown-body">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;