import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const changeToUpp=()=>{
        console.log("changed to upper",text);
        let uppText=text.toUpperCase();
        // console.log(uppText);
        // setText("Text style changed to uppercase");
        setText(uppText);
        props.showTextFormAlert("success",": changed to upper case");
    }
    const changeToLow=()=>{
        let uppText=text.toLowerCase();
        setText(uppText);
        props.showTextFormAlert("success",": changed to lower case");
    }
    const changeToClear=()=>{
        setText("");
        props.showTextFormAlert("warning",": cleared");
    }
    const changeToCapitalize=()=>{
        if(text==="") setText("");
        else{
        const wordArr=text.split(" ");
        // console.log(Array.isArray(wordArr));
        for (let i = 0; i < wordArr.length; i++) {
            let temp=wordArr[i];
            wordArr[i] = wordArr[i][0].toUpperCase() 
            // console.log(temp.substring(1));
            wordArr[i]+= temp.substring(1);
        }
        let capiText="";
        for (let i = 0; i < wordArr.length-1; i++)
        {
            capiText+=wordArr[i];
            capiText+=" ";
        }
        capiText+=wordArr[wordArr.length-1];
        setText(capiText);}
        props.showTextFormAlert("success",": changed to Capitalize");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showTextFormAlert("success",": changed to audible text");
      }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    let len=0;
    for(let word of text.split(" "))
        {
            if( word==="") continue;
            else len++;
            console.log(len);
        }

  return (
    <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
              <button className="btn btn-primary mt-3" onClick={changeToUpp}>Change to Uppercase</button>
              <button className="btn btn-primary mx-1 mt-3" onClick={changeToLow}>Change to Lowercase</button>
              <button className="btn btn-primary mx-1 mt-3" onClick={changeToCapitalize}>Capitalize</button>
              <button className="btn btn-warning mx-1 mt-3" onClick={speak}>Speak</button>
              <button className="btn btn-primary mx-1 mt-3" onClick={changeToClear}>Clear</button>
              <h2>Summary</h2>
              {/* <p>{text.split(" ").length} wordArr and {text.length} character</p> */}
              <p>{len} wordArr and {text.length} character</p>
              <p>Read time- {0.008 * text.split(" ").length} Minutes</p>
              <h2 >Preview</h2>
              <p className='pb-5'>{text}</p>
          </div>
    </div>
  )
}

