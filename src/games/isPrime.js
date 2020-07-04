import { generator, cons } from '../helper.js';
import { engine, questionCounter } from '../index.js';

const isPrime = (num) => {
  if (num < 1) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeMaker = () => {
  const gameData = [];
  for (let i = 0; i < questionCounter; i += 1) {
    const question = generator(1, 100);
    const check = isPrime(question);
    const answer = check ? 'yes' : 'no';
    gameData.push(cons(question, answer));
  }
  return gameData;
};

const startMassage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrime = () => engine(primeMaker(), startMassage);

export default runPrime;
