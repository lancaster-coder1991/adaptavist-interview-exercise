import React, { useState, useEffect } from 'react';
import { Result } from './components/Result'
import { prepareWordDictionary } from './utils/utils'
import { WordEntries } from "./types/types";
import './App.css';



function App() {
  const [inputWords, setInputWords] = useState<string>("")
  const [resultWords, setResultWords] = useState<JSX.Element[]>([])

  // useEffect(() => {
  // console.log(inputWords);
  // }, [inputWords]);

  const handleWordInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const currentWords = event.target.value
    setInputWords(currentWords)
  }

  const setResults = ():void => {
    const inputWordsDictionary: WordEntries = prepareWordDictionary(inputWords)

    const resultElementArray: JSX.Element[] = []
    
    for(const word in inputWordsDictionary) {
      resultElementArray.push(<Result word={word} count={inputWordsDictionary[word]} key={resultElementArray.length}></Result>)
    }

    setResultWords(resultElementArray)
  }

  return (
    <div className="App">
      <textarea id="main-text=area" onChange={(event) => handleWordInput(event)}></textarea>
      <button id="confirm-button" onClick={setResults}>GO!</button>
      <div id="results">{resultWords}</div>
    </div>
  );
}

export default App;
