import { generator } from '../helper.js';
import engine from '../index.js';


const even = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const question = generator(1, 100);
    const result = question % 2 === 0;
    const correctAnswer = result ? 'yes' : 'no';
    gameData[0].push(question);
    gameData[1].push(correctAnswer);
  }
  return gameData;
};

const evenData = even();

const startMassage = 'Answer "yes" if the number is even, otherwise answer "no".';

engine(evenData, startMassage);

export default even;
