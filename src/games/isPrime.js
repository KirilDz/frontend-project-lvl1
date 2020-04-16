import {
  generator, answer, wrongAnswer,
} from '../helper.js';

const isPrime = () => {
  const num = generator();
  console.log(`Question: ${num}`);
  const userAnswer = answer();
  const userResult = userAnswer === 'yes';
  let result = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  const correctAnswer = result ? 'yes' : 'no';
  if (result === userResult) {
    return true;
  }
  return wrongAnswer(userAnswer, correctAnswer);
};
export default isPrime;
