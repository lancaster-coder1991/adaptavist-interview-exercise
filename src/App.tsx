import React, { useState, useEffect } from 'react';
import { Result } from './components/Result'
import './App.css';

interface WordEntries {
  [key: string]: number
}

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
    const inputWordsArray: string[] = inputWords.split(/\s+/g);
    
    const inputWordsDictionary: WordEntries = {}

    inputWordsArray.forEach((word: string) => {
      let wordToFind = word as keyof typeof inputWordsDictionary
      if(inputWordsDictionary[wordToFind]) inputWordsDictionary[wordToFind]++
      else inputWordsDictionary[wordToFind] = 1
    })

    const resultElementArray: JSX.Element[] = []
    
    for(const word in inputWordsDictionary) {
      resultElementArray.push(<Result word={word} count={inputWordsDictionary[word]}></Result>)
    }

    // const resultElementArray: JSX.Element[] = inputWordsArray.map((word: string, index: number) => {
    //   return <Result word={word}></Result>
    // })
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
