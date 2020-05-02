import { generator, cycleCount, cons } from '../helper.js';
import engine from '../index.js';

const gcdCalculation = (num1, num2) => {
  const smallerNum = num1 > num2 ? num2 : num1;
  let result = 0;
  for (let j = smallerNum; j >= 1; j -= 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      result = j;
      return  result;
    }
  }
};

const gcdMaker = () => {
  const gameData = [];
  for (let i = 0; i < cycleCount; i += 1) {
    const num1 = generator(1, 100);
    const num2 = generator(1, 100);
    const expression = `${num1} ${num2}`;
    const result = gcdCalculation(num1, num2);
    gameData.push(cons(expression,result));
  }
  return gameData;
};

const startMassage = 'Find the greatest common divisor of given numbers.';

const gcdLaunch = engine(gcdMaker(), startMassage);

export default gcdLaunch;
