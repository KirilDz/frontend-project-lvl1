import { generator, questionCounter } from '../helper.js';
import engine from '../index.js';
import {cons, car, cdr} from '../base.js';

const progressionMaker = () => {
  const startProgression = generator(1, 100);
  const stepProgression = generator(2, 9);
  const arr = [];
  let counter = 1;
  for (let i = 0 ; i < 10; i += 1) {
    arr.push(startProgression + stepProgression * counter);
    counter++;
  }
  return arr;
};



const progression = () => {
  const gameData = [];
  for (let i = 0; i < questionCounter; i += 1) {
    const progressionArr = progressionMaker();
    const hidenIndex = Math.round(Math.random() * 10);
    const result = progressionArr[hidenIndex];
    progressionArr[hidenIndex] = '..';
    gameData.push(cons(progressionArr, result));
  }
  return gameData;
};

const progressionData = progression();

const startMassage = 'What number is missing in the progression?';

engine(progressionData, startMassage);

export default progression;
