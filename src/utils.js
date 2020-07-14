export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
export const getRandomArrayItem = (array) => array[getRandomNumber(0, array.length - 1)];
