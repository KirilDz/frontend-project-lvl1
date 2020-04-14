import readlineSync from 'readline-sync';

export const generator = () => Math.round(Math.random() * 100);
export const answer = () => readlineSync.question('Your answer: ');
export const greeting = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
export const userName = greeting();
export const wrongAnswer = (userAnswer, correctAnswer) => console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n Let's try again, ${userName}!`);
export const congratMassage = () => console.log(`Congratulations, ${userName}!`);
