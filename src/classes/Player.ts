class Player {
  width: number;
  height: number;
  position: { x: number; y: number };
  constructor(
    width: number = 100,
    height: number = 100,
    position: { x: number; y: number } = { x: 0, y: 0 }
  ) {
    this.width = width;
    this.height = height;
    this.position = position;
  }
}
export default Player;
