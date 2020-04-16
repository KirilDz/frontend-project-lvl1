import { congratMassage, gameDescription, gameDefinition } from './helper.js';

const engine = (switcher) => {
  gameDescription(switcher);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const result = gameDefinition(switcher);
    if (result) {
      console.log('Correct!');
    } else {
      break;
    }
    count += 1;
  }
  if (count === 3) {
    congratMassage();
  }
};
export default engine;