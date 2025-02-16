class Player {
  private width: number;
  private height: number;
  private position: { x: number; y: number };
  constructor() {
    this.width = 50;
    this.height = 50;
    this.position = { x: 0, y: 0 };
  }
  draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.position.x = canvas.width / 2 - this.width / 2;
    this.position.y = canvas.height - this.height - 30;
    context.fillStyle = "rgb(119, 6, 5)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  // up() {
  //   this.position.y -= 100;
  //   console.log(this.position.y);
  // }
}

export default Player;
