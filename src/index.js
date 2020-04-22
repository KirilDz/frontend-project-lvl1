import { congratMassage, answer, wrongAnswer } from './helper.js';

const engine = (data, startMassage) => {
  console.log(startMassage);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${data[0][i]}`);
    const userAnswer = answer();
    if (userAnswer === `${data[1][i]}`) {
      console.log('Correct!');
    }
    if (userAnswer !== `${data[1][i]}`) {
      return wrongAnswer(userAnswer, data[1][i]);
    }
  }
  return congratMassage();
};

export default engine;
