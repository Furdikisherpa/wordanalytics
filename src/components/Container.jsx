
import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";

export default function Container() {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText); 
  };

  return (
    <main className="container">
      <TextArea text={text} onTextChange={handleTextChange} />
      <Stats numberOfCharacters={text.length} />
    </main>
  );
}

