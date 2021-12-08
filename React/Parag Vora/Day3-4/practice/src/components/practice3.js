import  { useState } from "react";

function TextForm(props) {
    const handleUpClick =()=>
    {
        // console.log('upclick');
        let newText = text.toUpperCase();
        setText(newText);
    }
const handleOnChange = (event)=>
{
    console.log('on chnage');
    setText(event.target.value);
}

  const [text, setText] = useState("enter text here");
  return (
    <div className="container my-3">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        convert to uppercase
      </button>
    </div>
  );
}

export default TextForm;
