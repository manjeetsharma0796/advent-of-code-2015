const fs = require('fs');
const { Santa } = require('./src/santa');
const { Controller } = require('./src/Controller');

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

}

const main = () => {
  const totalHouse = partOne();
  console.log(totalHouse);
}

main();