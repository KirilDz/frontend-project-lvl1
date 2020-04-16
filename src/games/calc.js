import { generator, answer, wrongAnswer, resultDefenition } from '../helper.js';

const calc = () => {
  const num1 = generator();
  const num2 = generator();
  const operandGen = Math.round(Math.random() * 2);
  const arr = ['+', '-', '*'];
  let result = 0;
  const expression = `${num1} ${arr[operandGen]} ${num2}`;
  console.log(`Question: ${expression}`);
  const userResult = answer();
  if (arr[operandGen] === '+') {
    result = num1 + num2;
  } else if (arr[operandGen] === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  return resultDefenition(userResult, result);
};

export default calc;
