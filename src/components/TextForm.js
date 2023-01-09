import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        // document.getElementById('myBox').style.color='blue'
        // document.getElementById('myBox').style.backgroundColor='#ccffff'
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        
        setText(event.target.value)
       
    }
    const reset = ()=>{
        setText("")
        // document.getElementById('myBox').style.color='black'
        // document.getElementById('myBox').style.backgroundColor='white'
        props.showAlert("Text cleared","success")
    }
    const [text,setText] =useState('Enter text here');
    // setText("Enter new text")
    const copyText = ()=>{
        let text =document.getElementById('myBox')
         text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to clipboard","success")
    }
    const removeExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removes","success")
    }
    // const textSize = ()=>{
    //     document.getElementById('myBox').style.fontSize='50px'
    //     // newsize.select()
       
    // }
  return (
    <>
    <div className='container'style={{color:props.mode ==='light'?'grey':'white'}}>
      {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<h2>{props.heading}</h2>
<div className="mb-3"style={{color:props.mode ==='light'?'grey':'white'}}>
  {/* <label forhtml="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode ==='light'?'grey':'white'}}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={reset}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove extra space</button>
{/* <button className="btn btn-primary mx-2" onClick={textSize}>change text size</button> */}

    </div>
    
    <div className="container my-2" style={{color:props.mode ==='light'?'grey':'white'}}>
        <h4>Your text summary</h4>
        <p>{(text.length !==0 )?text.split(" ").length:0} words ,{text.length} characters</p>
        <p>{(text.length !==0)?0.008*text.split(" ").length:0} Minutes to read</p>
        <h4>Preview</h4>
        <div className='container' id="previewBoarder">
        <p>{text.length > 0?text:"Enter something to preview it here"}</p>
        </div>
    </div>
    </>
  )
}
