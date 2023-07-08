const { Santa } = require("./santa");

class Controller {
  #count

  constructor(santa) {
    this.santa = santa;
    this.log = {};
    this.#count = 0;
  }

  #incrementCount() {
    this.#count += 1;
  }

  #registerLogs(count) {
    const { x, y } = this.santa[count].status;
    this.log[`${x},${y}`] = 'house';
  }
  navigate([...instructions]) {

    const directionGuide = {
      '^': (santa) => { santa.moveUp() },
      '>': (santa) => { santa.moveRight() },
      '<': (santa) => { santa.moveLeft() },
      'v': (santa) => { santa.moveDown() }
    };

    instructions.forEach((instruction) => {
      if (this.santa.length === 1) {
        directionGuide[instruction](this.santa[0]);
        this.#registerLogs(0);
      }

      if (this.santa.length === 2) {
        const currentSanta = this.#count % 2;
        
        directionGuide[instruction](this.santa[currentSanta]);
        this.#registerLogs(currentSanta);
        this.#incrementCount();
      }
    })
  }

  get logs() {
    const log = this.log;
    return log;
  }
}

exports.Controller = Controller;