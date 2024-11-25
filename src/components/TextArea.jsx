import { useState } from "react";
import Warning from "./Warning";
export default function TextArea() {

  const [text, setText] = useState("");
  const [showwarning, setShowWarning] = useState(false);
  const [message, setMessage] =useState('');


  const handleChange = (event) =>{
    const newtext = event.target.value;
    if(newtext.includes("<script>") ){
      setShowWarning(true);
      setMessage("<script>");
      newtext.replace("<script>", "");
    
    } else if(newtext.includes("@")){
      setShowWarning(true);
      setMessage("@");
      newtext.replace("@", "");
    }
    
    else {
      setShowWarning(false);
      
      
    }
    setText(newtext);
  };

  return( 
    <>
  <textarea 
  onChange={handleChange}
  placeholder="Enter Your Text"
  value={text}
  spellCheck={false}
  rows="12" 
  className="textarea" 
  />

  <Warning showWarning={showwarning} Message={message}/>
  
  </>
);
  
}
