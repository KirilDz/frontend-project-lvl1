import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const { cons } = pairs;

const calculateGcd = (num1, num2) => {
  const smallerNum = Math.min(num1, num2);
  for (let j = smallerNum; j > 1; j -= 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      return j;
    }
  }
  return 1;
};

const genGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGcd(num1, num2);
  return cons(question, correctAnswer.toString());
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const runGcd = () => runGame(genGameData, gameRule);

export default runGcd;
