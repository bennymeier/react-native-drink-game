export const randomNumber = (min = 1, max = 5) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
