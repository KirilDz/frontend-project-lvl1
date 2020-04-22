import { generator } from '../helper.js';
import engine from '../index.js';

const progressionMaker = () => {
  const startProgression = generator(1, 100);
  const stepProgression = Math.round(Math.random() * 10);
  const arr = [startProgression];
  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + stepProgression);
  }
  return arr;
};

const progression = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const progressionArr = progressionMaker();
    const hidenIndex = Math.round(Math.random() * 10);
    const result = progressionArr[hidenIndex];
    progressionArr[hidenIndex] = '..';
    gameData[0].push(progressionArr);
    gameData[1].push(result);
  }
  return gameData;
};

const progressionData = progression();

const startMassage = 'What number is missing in the progression?';

engine(progressionData, startMassage);

export default progression;
