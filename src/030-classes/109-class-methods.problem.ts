import { expect, it } from "vitest";

class CanvasNode {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

it("Should be able to move", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  canvasNode.move(10, 20);

  expect(canvasNode.x).toEqual(10);
  expect(canvasNode.y).toEqual(20);
});
