export class Background {
  position: { x: number; y: number };
  radius: number;
  color: string;
  opacity: number;
  context: CanvasRenderingContext2D;
  constructor(
    context: CanvasRenderingContext2D,
    color: string,
    opacity: number
  ) {
    this.position = {
      x: this.numeroAleatorio(0, context.canvas.width),
      y: this.numeroAleatorio(0, context.canvas.height),
    };
    this.radius = this.numeroAleatorio(1, 3);
    this.color = color;
    this.opacity = opacity;
    this.context = context;
  }
  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.globalAlpha = this.opacity;
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
    context.restore();
  }
  // 900 x 1045
  numeroAleatorio(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
