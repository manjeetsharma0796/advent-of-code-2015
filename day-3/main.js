const fs = require('fs');
const { Santa } = require('./src/santa.js');
const { Controller } = require('./src/controller.js');

const partOne = () => {
  const rawInstructions = fs.readFileSync('./resources/instructions.txt', 'utf-8');
  const santa = new Santa();
  const elf = new Controller([santa]);

  elf.navigate(rawInstructions);
  return Object.keys(elf.logs).length;
}

const partTwo = () => {
  const rawInstructions = fs.readFileSync('./resources/instructions.txt', 'utf-8');
  const santa = new Santa();
  const roboSanta = new Santa();

  const elf = new Controller([santa, roboSanta]);
  elf.navigate(rawInstructions);
  return Object.keys(elf.logs).length
}

const main = () => {
  const totalHouseVisited1 = partOne();
  const totalHouseVisited2 = partTwo();

  console.log('Total Number of houses which santa visited at least one time ', totalHouseVisited1);
  console.log('Total number of houses which santa and robo santa visited at least one time is ', totalHouseVisited2);
}

main();