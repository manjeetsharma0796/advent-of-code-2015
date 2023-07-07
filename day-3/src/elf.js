class Elf {
  constructor(santa) {
    this.santa = santa;
  }

  navigate([...instructions]) {
    for (const instruction of instructions) {
      if (instruction === '^') {
        this.santa.moveUp();
      }

      if (instruction === 'v') {
        this.santa.moveDown();
      }
    }
  }
}

exports.Elf = Elf;