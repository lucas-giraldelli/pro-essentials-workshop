const func = () => {
  // Refactor this to be its own function
  const randomPercentage = calculateRandomPercentage();
  console.log(randomPercentage);
};

function calculateRandomPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}
