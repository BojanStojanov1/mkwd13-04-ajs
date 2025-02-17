// export { words, getRandomWord };

// const words = {
//   helloVariants: ["Hi", "Hello", "What's up"],
//   goodbyeVariants: ["Bye", "Goodbye", "Cheers", "See you soon"],
// };

// function getRandomWord(wordArray) {
//   return wordArray[Math.floor(Math.random() * (wordArray.length - 1))];
// }

// Via "export" keyword before the name of the const or function
export const words = {
  helloVariants: ["Hi", "Hello", "What's up"],
  goodbyeVariants: ["Bye", "Goodbye", "Cheers", "See you soon"],
};

export function getRandomWord(wordArray) {
  return wordArray[Math.floor(Math.random() * wordArray.length)];
}
