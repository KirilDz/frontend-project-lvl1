import { getRandomNumber, cons } from '../utils.js';
import { engine } from '../index.js';

const evenMaker = () => {
  const question = getRandomNumber(1, 100);
  const result = question % 2 === 0;
  const correctAnswer = result ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => engine(evenMaker, startMessage);

export default runEven;
