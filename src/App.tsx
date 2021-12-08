import React, { useState, useEffect } from 'react';
import { Result } from './components/Result'
import { prepareWordDictionary } from './utils/utils'
import { WordEntries } from "./types/types";
import './App.css';


function App() {
  const [inputWords, setInputWords] = useState<string[]>([])
  const [resultWords, setResultWords] = useState<JSX.Element[]>([])
  const [sorting, setSorting] = useState<string>("alphabetically")

  // useEffect(() => {
  // console.log(inputWords);
  // }, [inputWords]);

  const handleWordInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const currentWords: string = event.target.value
    const currentWordsArray: string[] = currentWords.split(/\s+/g).sort();
    setInputWords(currentWordsArray)
  }

  const setResults = ():void => {
    const inputWordsDictionary: { word: string; count: number }[] = prepareWordDictionary(inputWords, sorting)

    const resultElementArray = inputWordsDictionary.map(({word, count}, index) => {
      return <Result word={word} count={count} key={index}></Result>
    })

    setResultWords(resultElementArray)
  }

  const handleSorting = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    setSorting(event.target.value)
    setResults()
  }

  return (
    <div className="App">
      <textarea id="main-text=area" onChange={(event) => handleWordInput(event)}></textarea>
      <button id="confirm-button" onClick={setResults}>GO!</button>
      {/* only make this select visible after first search */}
      <select onChange={(event) => handleSorting(event)}>
        <option>Alphabetically</option>
        <option>Count</option>
      </select>
      <div id="results">{resultWords}</div>
    </div>
  );
}

export default App;
