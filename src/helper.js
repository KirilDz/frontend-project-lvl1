export const generator = (min, max) => Math.round(Math.random() * (max - min) + min);

export const cycleCount = 3;

export const cons = (a, b) => (f) => f(a, b);
export const car = (z) => z((x) => x);
export const cdr = (z) => z((x, y) => y);
