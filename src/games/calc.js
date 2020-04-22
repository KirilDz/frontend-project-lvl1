import { generator } from '../helper.js';
import engine from '../index.js';

const calc = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const num1 = generator(1, 100);
    const num2 = generator(1, 100);
    const operandGen = Math.round(Math.random() * 2);
    const arr = ['+', '-', '*'];
    const expression = `${num1} ${arr[operandGen]} ${num2}`;
    gameData[0].push(expression);
    if (arr[operandGen] === '+') {
      gameData[1].push(num1 + num2);
    } else if (arr[operandGen] === '-') {
      gameData[1].push(num1 - num2);
    } else {
      gameData[1].push(num1 * num2);
    }
  }
  return gameData;
};

const calcData = calc();
const startMassage = 'What is the result of the expression?';
engine(calcData, startMassage);

export default calc;
