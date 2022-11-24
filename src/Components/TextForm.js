import React, { useState } from "react"
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleloClick = () => {
    console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success")
  }

  const handleCopy  = () => {
    console.log("copy");
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success")
  }

  const clearText = () => {
    console.log("Clear was Clicked" + text);
    let newText = ("");
    setText(newText)
    props.showAlert("Text Cleared", "success")
  }

  const handleOnChange = (event) => {
    console.log("Handle on Change");
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  const [txt] = useState("Enter your Text");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} placeholder={txt} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="3"></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox  above to preview it here!"}</p>
      </div>
    </>
  );
}
