const { Santa } = require("./santa");

class Elf {
  constructor(santa) {
    this.santa = santa;
  }

  navigate([...instructions]) {
    const directionGuide = {
      '^': (santa) => { santa.moveUp() },
      '>': (santa) => { santa.moveRight() },
      '<': (santa) => { santa.moveLeft() },
      'v': (santa) => { santa.moveDown() }
    };

    for (const instruction of instructions) {
      directionGuide[instruction](this.santa);
    }
  }
}

exports.Elf = Elf;