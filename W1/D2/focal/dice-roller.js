const numberOfDiceRolls = process.argv.slice(2)[0];


const diceRoller = function(numberOfDiceRolls) {
  const result = [];
  for (let i = 0; i < numberOfDiceRolls; i++) {
    result.push(Math.floor(Math.random() * 6) + 1);
  }
  return `Rolled ${numberOfDiceRolls} dice: ${result.join(', ')}`;
};
console.log(diceRoller(numberOfDiceRolls));