import { getRandomNumber, cons } from '../utils.js';
import { engine } from '../index.js';

const getGcdResult = (num1, num2) => {
  const smallerNum = num1 > num2 ? num2 : num1;
  for (let j = smallerNum; j > 1; j -= 1) {
    if (num1 % j === 0 && num2 % j === 0) {
      return j;
    }
  }
  return 1;
};

const generateGcdExp = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const expression = `${num1} ${num2}`;
  const result = getGcdResult(num1, num2);
  return cons(expression, result.toString());
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const runGcd = () => engine(generateGcdExp, gameRule);

export default runGcd;
