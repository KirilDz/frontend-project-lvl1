import { getRandomNumber, cons } from '../utils.js';
import { engine } from '../index.js';

const progressionLength = 10;

const progressionCreator = (startProgression, stepProgression) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startProgression + stepProgression * (i + 1));
  }
  return progression;
};

const progressionMaker = () => {
  const startProgression = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(2, 9);
  const progression = progressionCreator(startProgression, stepProgression);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const result = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return cons(progression, result);
};

const startMessage = 'What number is missing in the progression?';

const runProgression = () => engine(progressionMaker, startMessage);

export default runProgression;
