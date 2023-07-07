class Elf {
  constructor(santa) {
    this.santa = santa;
  }

  navigate(instruction) {
    if (instruction === '^') {
      this.santa.moveUp();
    }
  }
}

exports.Elf = Elf;