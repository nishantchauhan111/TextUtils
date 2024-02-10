import React, { useState } from 'react';


export default function FormText(props) {
  const [text, setText] = useState("Enter the text here");
  const clickUpeer = ()=> {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const clickLowercase = ()=> {
    let newText = text.toLocaleLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=> {
    setText(event.target.value)
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <form>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{props.textname}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleOnChange}></textarea>
        </div>
      </form>
      <button className="btn-primary mx-2" onClick={clickUpeer}>Convert to uppercase</button>
      <button className="btn-primary" onClick={clickLowercase}>Convert to uppercase</button>
    </div>
    <div className="container">
      <h1>Enterd text summery</h1>
      <div className="text">
        <p>{text.split(" ").length} Words and {text.length} Charecters</p>
        <p>You whould take about {0.008 * text.split(" ").length} Minutes</p>
      </div>
      <h2 className="my-3">Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
