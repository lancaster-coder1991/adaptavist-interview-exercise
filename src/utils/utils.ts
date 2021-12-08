import { WordEntries } from "../types/types";

export const prepareWordDictionary = (inputWords: string) => {
  const inputWordsArray: string[] = inputWords.split(/\s+/g);

  const inputWordsDictionary: WordEntries = {};

  inputWordsArray.forEach((word: string) => {
    let wordToFind = word as keyof typeof inputWordsDictionary;
    if (inputWordsDictionary[wordToFind]) inputWordsDictionary[wordToFind]++;
    else inputWordsDictionary[wordToFind] = 1;
  });

  return inputWordsDictionary;
};
