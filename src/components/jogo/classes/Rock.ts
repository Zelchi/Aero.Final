import { CAMINHO_PEDRA_IMAGE } from "../../../utils/Constantes";

export class Rock {
    largura: number;
    altura: number;
    position: { x: number; y: number };
    velocidade: number;
    image: HTMLImageElement;
    constructor(larguraTela: number, alturaTela: number) {
        this.largura = Math.min(larguraTela, alturaTela) * 0.1;
        this.altura = Math.min(larguraTela, alturaTela) * 0.1;
        this.velocidade = alturaTela * 0.007;
        this.position = {
            x: this.spawn(0, 700),
            y: 500,
        };
        this.image = this.getImg(CAMINHO_PEDRA_IMAGE);
    }
    getImg(path: string) {
        const image = new Image();
        image.src = path;
        return image;
    }
    spawn(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
    draw(context: CanvasRenderingContext2D) {
        context.fillRect(this.position.x, this.position.y, this.largura, this.altura);
        context.drawImage(this.image, this.position.x, this.position.y, this.largura, this.altura);
    }
    atualizarInimigo() {
        this.position.y += this.velocidade;
    }
}