export const cons = (a,b) => (f) => f(a,b);
export const car = (z) => z((x, y) => x);
export const cdr = (z) => z((x, y) => y);
