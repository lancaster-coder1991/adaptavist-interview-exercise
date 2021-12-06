import React, { useState, useEffect } from 'react';
import { Result } from './components/Result'
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

  const renderResults = ():any => {
    const inputWordsArray: string[] = inputWords.split(/\s+/g)
    const resultElementArray: JSX.Element[] = inputWordsArray.map((word: string, index: number) => {
      return <Result word={word}></Result>
    })
    setResultWords(resultElementArray)
  }

  return (
    <div className="App">
      <textarea id="main-text=area" onChange={(event) => handleWordInput(event)}></textarea>
      <button id="confirm-button" onClick={renderResults}>GO!</button>
      <div id="results">{resultWords}</div>
    </div>
  );
}

export default App;
