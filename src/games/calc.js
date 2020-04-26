import { generator, questionCounter } from '../helper.js';
import engine from '../index.js';
import {cons, car, cdr} from '../base.js';

const calc = () => {
  const gameData = [];
  for (let i = 0; i < questionCounter; i += 1) {
    const num1 = generator(1, 100);
    const num2 = generator(1, 100);
    const arr = ['+', '-', '*'];
    const operandGen = generator(0, arr.length);
    const expression = `${num1} ${arr[operandGen]} ${num2}`;
    switch (arr[operandGen]) {
      case "+":
        gameData.push(cons(expression, num1+num2));
        break;
      case "-":
        gameData.push(cons(expression, num1-num2));
        break;
      case "*":
        gameData.push(cons(expression, num1*num2));
        break;
    }
  }
  return gameData;
};

const calcData = calc();
const startMassage = 'What is the result of the expression?';
engine(calcData, startMassage);

export default calc;
