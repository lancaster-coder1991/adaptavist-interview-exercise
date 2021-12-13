import React, { useState, useEffect } from 'react';
import { Result } from './components/Result'
import './App.css';

type DictionaryEntry = { word: string; count: number }
type InputWordsDictionary = DictionaryEntry[]

function App() {
  const [inputWords, setInputWords] = useState<string[]>([])
  const [resultWords, setResultWords] = useState<JSX.Element[]>([])
  const [sorting, setSorting] = useState<string>("Alphabetically")

  useEffect(() => {
    setResults()
  }, [sorting]);

  const handleWordInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const currentWords: string = event.target.value
    const currentWordsArray: string[] = currentWords.split(/\s+/g).filter(str => str);
    setInputWords(currentWordsArray)
  }

  const setResults = ():void => {
    console.log(inputWords)
    const inputWordsDictionary: InputWordsDictionary = prepareWordDictionary(inputWords, sorting)

    const resultElementArray = inputWordsDictionary.map(({word, count}: DictionaryEntry, index) => {
      return <Result word={word} count={count} key={index}></Result>
    })

    setResultWords(resultElementArray)
  }

  const prepareWordDictionary = (
  inputWordsArray: string[],
  sorting: string
  ): InputWordsDictionary => {
  const inputWordsDictionary: InputWordsDictionary = [];

  inputWordsArray.forEach((word: string) => {
    const indexOfWordInDictionary: number = inputWordsDictionary.findIndex(
      (dictionaryEntry) => dictionaryEntry.word === word
    );

    if (indexOfWordInDictionary >= 0)
      inputWordsDictionary[indexOfWordInDictionary].count++;
    else inputWordsDictionary.push({ word: word, count: 1 });
  });

  const sortedWordDictionary: InputWordsDictionary =
    sorting === "Alphabetically"
      ? inputWordsDictionary.sort((a: DictionaryEntry, b: DictionaryEntry) => (a.word > b.word ? 1 : -1))
      : inputWordsDictionary.sort((a: DictionaryEntry, b: DictionaryEntry) => b.count - a.count);

  return sortedWordDictionary;
};

  return (
    <>
      <div className="context">
        <div className="App">
          <h2 id="title">Enter some lovely text below</h2>
          <textarea id="main-text-area" onChange={(event) => handleWordInput(event)}></textarea>
          <label id="sorting-select-label">Choose your sorting:  
            <select id="sorting-select" onChange={(event) => setSorting(event.target.value)}>
              <option>Alphabetically</option>
              <option>Count</option>
            </select>
          </label>
          <button id="confirm-button" onClick={setResults}>Click me for your word breakdown</button>
          <div id="results">{resultWords}</div>
        </div>
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </>
  );
}

export default App;
