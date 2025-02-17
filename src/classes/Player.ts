import { PATH_SPACESHIP_IMAGE } from "../utils/Constantes";
class Player {
  width: number;
  height: number;
  position: { x: number; y: number };
  speed: number;
  image: HTMLImageElement;
  constructor(canvasWidth: number, canvasHeight: number) {
    this.width = 30;
    this.height = 30;
    this.speed = 5;
    this.position = {
      x: canvasWidth / 2 - this.width / 2,
      y: canvasHeight - this.height - 30,
    };
    this.image = this.getImg(PATH_SPACESHIP_IMAGE);
  }

  getImg(path: string) {
    const image = new Image();
    image.src = path;
    return image;
  }

  moveLeft() {
    this.position.x -= this.speed;
  }
  moveRight() {
    this.position.x += this.speed;
  }
  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

export default Player;
