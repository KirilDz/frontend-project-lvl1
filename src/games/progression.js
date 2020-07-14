import { getRandomNumber } from '../utils.js';
import { engine } from '../index.js';
import pairs from '@hexlet/pairs';
const {cons} = pairs;

const progressionLength = 10;

const buildProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * (i));
  }
  return progression;
};

const generateProgression = () => {
  const startProgression = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(2, 9);
  const progression = buildProgression(startProgression, stepProgression);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return cons(progression, correctAnswer.toString());
};

const gameRule = 'What number is missing in the progression?';

const runProgression = () => engine(generateProgression, gameRule);

export default runProgression;
