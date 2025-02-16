class Player {
  public width: number;
  public height: number;
  public position: { x: number; y: number };
  constructor(
    width: number = 50,
    height: number = 50,
    position: { x: number; y: number } = {
      x: 0,
      y: 0,
    }
  ) {
    this.width = width;
    this.height = height;
    this.position = position;
  }
  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "rgb(119, 6, 5)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export default Player;
