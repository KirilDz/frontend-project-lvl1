import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';
import { engine } from '../index.js';

const { cons } = pairs;

const progressionLength = 10;

let answer = 0;

const getQuestion = (start, step, index) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === index) {
      progression.push('..');
      answer = start + step * (i);
    } else {
      progression.push(start + step * (i));
    }
  }
  return progression.join(' ');
};

const generateProgression = () => {
  const startProgression = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(2, 9);
  const hiddenIndex = getRandomNumber(1, progressionLength);
  const question = getQuestion(startProgression, stepProgression, hiddenIndex);
  return cons(question, answer.toString());
};

const gameRule = 'What number is missing in the progression?';

const runProgression = () => engine(generateProgression, gameRule);

export default runProgression;
