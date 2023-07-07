const { Santa } = require("./santa");

class Elf {
  constructor(santa) {
    this.santa = santa;
    this.log = {};
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

  get logs () {
    const log = this.log;
    return log;
  }
}

exports.Elf = Elf;