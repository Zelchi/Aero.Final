import { CAMINHO_PEDRA_IMAGE } from "../../../utils/Constantes";

class Rock {
  width: number;
  height: number;
  position: { x: number; y: number };
  speed: number;
  image: HTMLImageElement;
  constructor(telaHeight: number, telaWidth: number) {
    this.width = telaHeight * 0.04;
    this.height = telaHeight * 0.04;
    this.speed = telaHeight * 0.005;
    this.position = {
      x: this.randon(0, telaWidth),
      y: 0,
    };
    this.image = this.getImg(CAMINHO_PEDRA_IMAGE);
  }
  getImg(path: string) {
    const image = new Image();
    image.src = path;
    return image;
  }
  randon(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  draw(context: CanvasRenderingContext2D) {
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  atualizarRock() {
    this.position.y += this.speed;
  }
}

export default Rock;
