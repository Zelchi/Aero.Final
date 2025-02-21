export class Disparo {
  position: { x: number; y: number };
  velocity: number;
  width: number;
  height: number;
  angulo: number;
  constructor(
    position: { x: number; y: number },
    velocity: number,
    angulo: number
  ) {
    this.position = position;
    this.height = 20;
    this.width = 2;
    this.velocity = velocity;
    this.angulo = angulo;
  }
  draw(context: CanvasRenderingContext2D) {
    context.save()
    context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    console.log(this.angulo);
    context.rotate(this.angulo);
    context.restore();
  }
  renderizar(context: CanvasRenderingContext2D) {
    this.draw(context);
    this.position.x += Math.cos(this.angulo) * this.velocity;
    this.position.y += Math.sin(this.angulo) * this.velocity;
  }
}
