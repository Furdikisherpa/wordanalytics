import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;
  const instagramCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;



  const wordArray = text.trim().split(" ");
  const filterWordArray = wordArray.filter((item) => item != "");
  const numberOfWords = filterWordArray.length;

  const stats = {
    numberOfCharacters,
    facebookCharactersLeft,
    instagramCharactersLeft,
    numberOfWords,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

