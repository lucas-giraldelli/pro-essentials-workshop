const func = () => {
  const randomNumber = (Math.random() * 100).toFixed(2);
  // Refactor this to be its own function
  const randomPercentage = `${randomNumber}%`;
  console.log(randomPercentage);
};
