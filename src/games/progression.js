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

const genGameData = () => {
  const startNum = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(2, progressionLength - 1);
  const hiddenIndex = getRandomNumber(1, progressionLength);
  const question = getQuestion(startNum, progressionStep, hiddenIndex);
  const answer = startNum + progressionStep * hiddenIndex;
  return cons(question.join(' '), answer.toString());
};

const gameRule = 'What number is missing in the progression?';

const runProgression = () => runGame(genGameData, gameRule);

export default runProgression;
