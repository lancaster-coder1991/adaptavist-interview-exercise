import { WordEntries } from "../types/types";

export const prepareWordDictionary = (
  inputWordsArray: string[],
  sorting: string
) => {
  const inputWordsDictionary: { word: string; count: number }[] = [];

  inputWordsArray.forEach((word: string) => {
    const indexOfWordInDictionary: number = inputWordsDictionary.findIndex(
      (dictionaryEntry) => dictionaryEntry.word === word
    );

    if (indexOfWordInDictionary >= 0)
      inputWordsDictionary[indexOfWordInDictionary].count++;
    else inputWordsDictionary.push({ word: word, count: 1 });
  });
  console.log("sorting value passed to prepareWordDictionary " + sorting);
  console.log(inputWordsDictionary);

  const sortedWordDictionary =
    sorting === "Alphabetically"
      ? inputWordsDictionary.sort((a, b) => (a.word > b.word ? 1 : -1))
      : inputWordsDictionary.sort((a, b) => b.count - a.count);

  console.log(sortedWordDictionary);
  console.log("-----------------------------------");
  return sortedWordDictionary;
};
