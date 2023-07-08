class Santa {
  constructor() {
    this.currentCoordinate = { x: 0, y: 0 };
  }


  #move(delta) {
    this.currentCoordinate.y += delta.y;
    this.currentCoordinate.x += delta.x;
  }

  moveUp() {
    this.#move({ x: 0, y: 1 });
  }

  moveDown() {
    this.#move({ x: 0, y: -1 });
  }

  moveRight() {
    this.#move({ x: 1, y: 0 });
  }

  moveLeft() {
    this.#move({ x: -1, y: 0 });
  }

  get status() {
    const currentCoordinate = this.currentCoordinate;
    return currentCoordinate;
  }
}

module.exports = {
  Santa
}