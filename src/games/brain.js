import { generator, answer, wrongAnswer } from '../helper.js';

const brain = () => {
  const number = generator();
  const result = number % 2 === 0;
  const correctAnswer = result ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const i = answer();
  if ((result && i === 'yes') || (!result && i === 'no')) {
    return true;
  }
  return wrongAnswer(i, correctAnswer);
};

export default brain;
