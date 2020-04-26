import { generator, questionCounter } from '../helper.js';
import engine from '../index.js';
import {cons, car, cdr} from '../base.js';

const isPrimeChecker = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrime = () => {
  const gameData = [];
  for (let i = 0; i < questionCounter; i += 1) {
    const num = generator(1, 100);
    const check = isPrimeChecker(num);
    const answer = check ? 'yes' : 'no';
    gameData.push(cons(num, answer));
  }
  return gameData;
};

const isPrimeData = isPrime();
const startMassage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

engine(isPrimeData, startMassage);

export default isPrime;
