import calc from './games/calc.js';
import brain from './games/brain.js';
import { congratMassage } from './helper.js';

// export const calcEnginge = () => {
//   let count = 0;
//   console.log('What is the result of the expression?');
//   for (let i = 0; i < 3; i++) {
//     const result = calc();
//     if (result) {
//       console.log('Correct!');
//     }
//     if (!result) {
//       return;
//     }
//     count += 1;
//   }
//   if (count === 3) {
//     congratMassage();
//   }
// };
//
// const brainEnginge = () => {
//   let count = 0;
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < 3; i++) {
//     const result = brain();
//     if (result) {
//       console.log('Correct!');
//     }
//     if (!result) {
//       return;
//     }
//     count += 1;
//   }
//   if (count === 3) {
//     congratMassage();
//   }
// };

const engine = (switcher) => {
  if (switcher === 1) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  if (switcher === 2) {
    console.log('What is the result of the expression?');
  }
  let count = 0;
  for (let i = 0; i < 3; i++) {
    const result = switcher === 1 ? brain() : calc();
    if (result) {
      console.log('Correct!');
    }
    if (!result) {
      return;
    }
    count += 1;
  }
  if (count === 3) {
    congratMassage();
  }
};

export default engine;
