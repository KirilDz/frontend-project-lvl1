import { getRandomNumber, cons } from '../utils.js';
import { engine } from '../index.js';

const isPrime = (num) => {
  if (num < 1) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeMaker = () => {
  const question = getRandomNumber(1, 100);
  const check = isPrime(question);
  const answer = check ? 'yes' : 'no';
  return cons(question, answer);
};

const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrime = () => engine(primeMaker, startMessage);

export default runPrime;
