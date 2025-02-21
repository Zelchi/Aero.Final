export class Disparo {
  position: { x: number; y: number };
  velocity: number;
  width: number;
  height: number;
  constructor(position: { x: number; y: number }, velocity: number) {
    this.position = position;
    this.height = 20;
    this.width = 2;
    this.velocity = velocity;
  }
  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  renderizar(context: CanvasRenderingContext2D) {
    this.draw(context);
    this.position.y -= 10;
  }
}
