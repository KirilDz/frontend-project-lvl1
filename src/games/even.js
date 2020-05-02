import { generator, cycleCount } from '../helper.js';
import engine from '../index.js';
import {cons} from '../base.js';

const evenMaker = () => {
  const gameData = [];
  for (let i = 0; i < cycleCount; i += 1) {
    const question = generator(1, 100);
    const result = question % 2 === 0;
    const correctAnswer = result ? 'yes' : 'no';
    gameData.push(cons(question, correctAnswer));
  }
  return gameData;
};

const startMassage = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenLaunch = engine(evenMaker, startMassage);

export  default  evenLaunch;


