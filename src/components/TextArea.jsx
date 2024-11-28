import React, { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, onTextChange }) {
  const [showWarning, setShowWarning] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setShowWarning(true);
      setMessage("<script>");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setShowWarning(true);
      setMessage("@");
      newText = newText.replace("@", "");
    } else {
      setMessage("");
      setShowWarning(false);
    }

    onTextChange(newText); 
  };

  return (
    <>
      <textarea
        onChange={handleChange}
        placeholder="Enter Your Text"
        value={text}
        spellCheck={false}
        rows="12"
        className="textarea"
      />
      <Warning showWarning={showWarning} message={message} />
    </>
  );
}
