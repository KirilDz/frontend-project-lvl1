import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const { cons } = pairs;

const progressionLength = 10;

const getQuestion = (start, step, index) => {
  const question = [];
  for (let i = 0; i < progressionLength; i += 1) {
    question.push(i !== index ? start + step * i : '..');
  }
  return question;
};

const generateProgression = () => {
  const startProgression = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(2, 9);
  const hiddenIndex = getRandomNumber(1, progressionLength);
  const question = getQuestion(startProgression, stepProgression, hiddenIndex);
  const answer = question[hiddenIndex] !== question[question.length - 1]
    ? question[hiddenIndex + 1] - stepProgression
    : question[hiddenIndex - 1] + stepProgression;
  return cons(question.join(' '), answer.toString());
};

const gameRule = 'What number is missing in the progression?';

generateProgression();

const runProgression = () => runGame(generateProgression, gameRule);

export default runProgression;
