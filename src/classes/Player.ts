class Player {
  width: number;
  height: number;
  position: { x: number; y: number };
  speed: number;
  constructor(canvasWidth: number, canvasHeight: number) {
    this.width = 50;
    this.height = 50;
    this.speed = 5;
    this.position = {
      x: canvasWidth / 2 - this.width / 2,
      y: canvasHeight - this.height - 30,
    };
  }
  moveLeft() {
    this.position.x -= this.speed;
  }
  moveRight() {
    this.position.x += this.speed;
  }
  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "rgb(119, 6, 5)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export default Player;
