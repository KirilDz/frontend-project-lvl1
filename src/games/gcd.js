import { generator } from '../helper.js';
import engine from '../index.js';

const gcd = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const num1 = generator(1, 100);
    const num2 = generator(1, 100);
    const smallerNum = num1 > num2 ? num2 : num1;
    gameData[0].push(`${num1} ${num2}`);
    for (let j = smallerNum; j >= 1; j -= 1) {
      if (num1 % j === 0 && num2 % j === 0) {
        gameData[1].push(j);
        break;
      }
    }
  }

  return gameData;
};

const gcdData = gcd();

const startMassage = 'Find the greatest common divisor of given numbers.';
engine(gcdData, startMassage);

export default gcd;
