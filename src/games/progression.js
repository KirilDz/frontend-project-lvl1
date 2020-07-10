import { getRandomNumber, cons } from '../utils.js';
import { engine } from '../index.js';

const progressionLength = 9;

const buildProgression = (startProgression, stepProgression) => {
  const progression = [startProgression];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startProgression + stepProgression * (i + 1));
  }
  return progression;
};

const generateProgression = () => {
  const startProgression = getRandomNumber(1, 100);
  console.log(startProgression);
  const stepProgression = getRandomNumber(2, 9);
  const progression = buildProgression(startProgression, stepProgression);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const result = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return cons(progression, result.toString());
};

const gameRule = 'What number is missing in the progression?';

const runProgression = () => engine(generateProgression, gameRule);

export default runProgression;
