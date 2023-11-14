export class PaddleField {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.length = x2 - x1 + y2 - y1;
  }
}