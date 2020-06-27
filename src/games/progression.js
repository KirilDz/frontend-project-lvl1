import { generator, cons } from '../helper.js';
import { engine, questionCounter } from '../index.js';

const progressionLength = 10;

const progressionCreator = (startProgression, stepProgression) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startProgression + stepProgression * (i + 1));
  }
  return progression;
};

const progressionMaker = () => {
  const gameData = [];
  for (let i = 0; i < questionCounter; i += 1) {
    const startProgression = generator(1, 100);
    const stepProgression = generator(2, 9);
    const progression = progressionCreator(startProgression, stepProgression);
    const hiddenIndex = generator(0, progression.length - 1);
    const result = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    gameData.push(cons(progression, result));
  }
  return gameData;
};

const startMassage = 'What number is missing in the progression?';

const runProgression = engine(progressionMaker(), startMassage);

export default runProgression;
