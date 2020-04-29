import { generator, questionCounter } from '../helper.js';
import engine from '../index.js';
import {cons} from '../base.js';

const progressionLength = 10;

const progressionCreator = () => {
  const startProgression = generator(1, 100);
  const stepProgression = generator(2, 9);
  const arr = [];
  let counter = 1;
  for (let i = 0 ; i < progressionLength; i += 1) {
    arr.push(startProgression + stepProgression * counter);
    counter++;
  }
  return arr;
};

const progressionMaker = () => {
  const gameData = [];
  for (let i = 0; i < questionCounter; i += 1) {
    const progression = progressionCreator();
    const hidenIndex = Math.round(Math.random() * progressionLength);
    const result = progression[hidenIndex];
    progression[hidenIndex] = '..';
    gameData.push(cons(progression, result));
  }
  return gameData;
};

const startMassage = 'What number is missing in the progression?';

engine(progressionMaker(), startMassage);

export default progressionMaker;
