const { Santa } = require("./santa");

class Controller {
  constructor(santa) {
    this.santa = santa;
    this.log = {};
  }

  #registerLogs() {
    const { x, y } = this.santa.status;
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
      directionGuide[instruction](this.santa);
      this.#registerLogs();
    })
  }

  get logs() {
    const log = this.log;
    return log;
  }
}

exports.Controller = Controller;