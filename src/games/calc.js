import { getRandomNumber, cons } from '../utils.js';
import { engine } from '../index.js';

const calcMaker = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operands = ['+', '-', '*'];
  const operandGenerator = getRandomNumber(0, operands.length - 1);
  const operand = operands[operandGenerator];
  const expression = num1 > num2 ? `${num1} ${operand} ${num2}` : `${num2} ${operand} ${num1}`;
  let result = 0;
  switch (operand) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 > num2 ? num1 - num2 : num2 - num1;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return cons(expression, result);
};

const startMessage = 'What is the result of the expression?';

const runCalc = () => engine(calcMaker, startMessage);

export default runCalc;
