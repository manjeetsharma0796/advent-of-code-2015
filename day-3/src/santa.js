class Santa {
  constructor() {
    this.currentCoordinate = { x: 0, y: 0 };
  }

  moveUp() {
    this.currentCoordinate.y += 1;
  }

  moveDown() {
    this.currentCoordinate.y -= 1;
  }

  moveRight() {
    this.currentCoordinate.x += 1;
  }

  moveLeft() {
    this.currentCoordinate.x -= 1;
  }

  get status() {
    const currentCoordinate = this.currentCoordinate;
    return currentCoordinate;
  }
}

module.exports = {
  Santa
}