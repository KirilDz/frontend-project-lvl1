import pairs from '@hexlet/pairs';
import { getRandomNumber, getRandomArrayItem } from '../utils.js';
import runGame from '../index.js';

const { cons } = pairs;

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Wrong operand!');
  }
};

const genGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = getRandomArrayItem(operators);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return cons(question, correctAnswer.toString());
};

const gameRule = 'What is the result of the expression?';

const runCalc = () => runGame(genGameData, gameRule);

export default runCalc;
