const { Santa } = require("./santa");

class Controller {
  constructor(santa) {
    this.santa = santa;
    this.log = {};
  }

  #registerLogs() {
    const { x, y } = this.santa[0].status;
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
        this.#registerLogs();
      }
    })
  }

  get logs() {
    const log = this.log;
    return log;
  }
}

exports.Controller = Controller;