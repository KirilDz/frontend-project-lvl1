import pairs from '@hexlet/pairs';
const { cons } = pairs;
import { getRandomNumber, getRandomArrayItem } from '../utils.js';
import { engine } from '../index.js';

const calculate = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operands = ['+', '-', '*'];
  const operand = getRandomArrayItem(operands);
  const question = `${num1} ${operand} ${num2}`;
  const correctAnswer = calculate(num1, num2, operand);
  return cons(question, correctAnswer.toString());
};

const gameRule = 'What is the result of the expression?';

const runCalc = () => engine(generateRound, gameRule);

export default runCalc;
