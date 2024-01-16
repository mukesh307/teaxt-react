import React, {useState} from 'react'

export default function Textform(props) {
   const handelUpclick =()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handelLoclick =()=>{
      let newText = text.toLowerCase()
      setText(newText)
  }
  const handelclearclick =()=>{
    let newText = ' '
    setText(newText)
}

    const handleOnchange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter heare')

  return (
    <>
    <div className='container' style={{Color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'gray':'white'}}  id="mybox" rows="8"></textarea>
   </div>
  <button className="btn btn-primary mx-2" onClick={handelUpclick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2 " onClick={handelLoclick}>Convert to lowercase</button>
  <button className="btn btn-danger mx-2 " onClick={handelclearclick}>Clear text</button>
    </div>


    <div className="container my-3" >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length}character</p>
        <p>{0.008 * text.split(" ").length} Minuts read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
