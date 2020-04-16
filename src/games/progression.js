import { generator, answer, wrongAnswer, resultDefenition } from '../helper.js';

const progressionMaker = () => {
  const startProgression = generator();
  const stepProgression = Math.round(Math.random() * 10);
  const arr = [startProgression];
  for (let i = 1; i < 10; i++) {
    arr.push(arr[i - 1] + stepProgression);
  }
  return arr;
};

const progression = () => {
  const progressionArr = progressionMaker();
  const hidenIndex = Math.round(Math.random() * 10);
  const result = progressionArr[hidenIndex];
  progressionArr[hidenIndex] = '..';
  console.log(`Question: ${progressionArr}`);
  const userResult = answer();
  return resultDefenition(userResult, result);
};

export default progression;
