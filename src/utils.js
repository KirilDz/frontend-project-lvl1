export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
export const getRandomElement = (start, array) => getRandomNumber(start, array.length - 1);

export const cons = (a, b) => (f) => f(a, b);
export const car = (z) => z((x) => x);
export const cdr = (z) => z((x, y) => y);
