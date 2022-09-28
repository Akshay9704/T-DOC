import React, { useState } from "react"
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleloClick = () => {
    console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log("Handle on Change");
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  const [txt] = useState("Enter your Text");
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} placeholder={txt} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
      </div>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
