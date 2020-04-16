import {
  generator, answer, wrongAnswer, resultDefenition
} from '../helper.js';

const gcd = () => {
  const num1 = generator();
  const num2 = generator();
  console.log(`Question: ${num1} ${num2}`);
  const userResult = answer();
  const smallerNum = num1 > num2 ? num2 : num1;
  let result = 0;
  for (let i = 1; i <= smallerNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return resultDefenition(userResult, result);
};

export default gcd;
