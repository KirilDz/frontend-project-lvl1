import { getRandomNumber, cons } from '../utils.js';
import { engine } from '../index.js';

const gcdCalculation = (num1, num2) => {
  const smallerNum = num1 > num2 ? num2 : num1;
  let result = 0;
  for (let j = smallerNum; j >= 1; j -= 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      result = j;
      return result;
    }
  }
  return result;
};

const gcdMaker = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const expression = `${num1} ${num2}`;
  const result = gcdCalculation(num1, num2);
  return cons(expression, result);
};

const startMessage = 'Find the greatest common divisor of given numbers.';

const runGcd = () => engine(gcdMaker, startMessage);

export default runGcd;
