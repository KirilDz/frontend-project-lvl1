import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const { cons } = pairs;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrime = () => runGame(genGameData, gameRule);

export default runPrime;
