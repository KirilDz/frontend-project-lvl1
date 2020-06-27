import { generator, cons } from '../helper.js';
import { engine, questionCounter } from '../index.js';

const calcMaker = () => {
  const gameData = [];
  for (let i = 0; i < questionCounter; i += 1) {
    const num1 = generator(1, 100);
    const num2 = generator(1, 100);
    const operands = ['+', '-', '*'];
    const operandGenerator = generator(0, operands.length);
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
    gameData.push(cons(expression, result));
  }
  return gameData;
};

const startMassage = 'What is the result of the expression?';

const runCalc = engine(calcMaker(), startMassage);

export default runCalc;
