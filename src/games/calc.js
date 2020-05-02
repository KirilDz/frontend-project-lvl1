import { generator, cycleCount } from '../helper.js';
import engine from '../index.js';
import {cons} from '../base.js';

const calcMaker = () => {
  const gameData = [];
  for (let i = 0; i < cycleCount; i += 1) {
    const num1 = generator(1, 100);
    const num2 = generator(1, 100);
    const operands = ['+', '-', '*'];
    const operandGenerator = generator(0, operands.length);
    const operand = operands[operandGenerator];
    const expression = num1 > num2 ? `${num1} ${operand} ${num2}` : `${num2} ${operand} ${num1}`;
    switch (operand) {
      case "+":
        gameData.push(cons(expression, num1+num2));
        break;
      case "-":
        gameData.push(cons(expression, num1 > num2 ? num1 - num2 : num2 - num1));
        break;
      case "*":
        gameData.push(cons(expression, num1*num2));
        break;
    }
  }
  return gameData;
};

const startMassage = 'What is the result of the expression?';

const calcLaunch = engine(calcMaker, startMassage);

export default calcLaunch;
