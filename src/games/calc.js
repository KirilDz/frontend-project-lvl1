import { getRandomNumber, cons, getRandomElement } from '../utils.js';
import { engine } from '../index.js';

const getResult = (num1, num2, operand) => {
  let result = 0;
  switch (operand) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
};

const generateExpression = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operands = ['+', '-', '*'];
  const operand = operands[getRandomElement(0, operands)];
  const expression = `${num1} ${operand} ${num2}`;
  const expressionResult = getResult(num1, num2, operand);
  return cons(expression, expressionResult.toString());
};

const gameRule = 'What is the result of the expression?';

const runCalc = () => engine(generateExpression, gameRule);

export default runCalc;
