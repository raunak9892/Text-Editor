import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  };
  const handleClearClick = () => {
    props.showAlert("Text Cleared","success");
    let newText = "";
    setText(newText);
    //props.showAlert("Text Cleared","success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor:    "white",
  });
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");

    }
    
  const [btntext, setBtnText] = useState("Enable Dark Mode");
 
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="button button2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="button button2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="button button2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="button button2" onClick={toggleStyle}>
          {btntext}
        </button>
        <button className= "button button2" onClick={handleCopy}> Copy Text</button>

      </div>
      <div className="my-3" id={props.mode}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

// text = "new text"; // Wrong way to change the state
// setText("new text"); // Correct way to change the state
