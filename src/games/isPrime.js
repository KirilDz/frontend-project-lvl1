import { generator } from '../helper.js';
import engine from '../index.js';

const isPrimeChecker = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const isPrime = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const num = generator(1, 100);
    gameData[0].push(num);
  }
  for (let i = 0; i < 3; i += 1) {
    const check = isPrimeChecker(gameData[0][i]);
    gameData[1].push(check);
  }
  return gameData;
};

const isPrimeData = isPrime();
const startMassage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

engine(isPrimeData, startMassage);

export default isPrime;
