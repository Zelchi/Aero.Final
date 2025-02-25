import { CAMINHO_PEDRA_IMAGE } from "../../../utils/Constantes";
import { Inimigo } from "./Inimigo";

export class Rocks {
    private context: CanvasRenderingContext2D;
    public rocks: Rock[];

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.rocks = [];
    }

    public gerarPedras = (context: CanvasRenderingContext2D, intervalo: number) => {
        setInterval(() => {
            const rock = new Rock(context.canvas.width, context.canvas.height);
            this.rocks.push(rock);
        }, intervalo);
    };

    private limparForaDaTela = () => {
        this.rocks = this.rocks.filter((rock) => {
            return rock.position.y < this.context.canvas.height;
        });
    };

    private limparHit = () => {
        this.rocks = this.rocks.filter((rock) => {
            return !rock.colidiu;
        });
    }

    public renderizar = () => {
        this.rocks.forEach((rock, index) => {
            rock.renderizar(rock, this.context);
            if (rock.position.y > this.context.canvas.height) {
                this.rocks.splice(index, 1);
            }
        });
        this.limparForaDaTela();
        this.limparHit();
    };
}

class Rock extends Inimigo {
    private velocidade: number;
    private rotationSpeed: number;
    private image: HTMLImageElement;
    private angle: number;

    constructor(larguraTela: number, alturaTela: number) {
        const largura = Math.min(larguraTela, alturaTela) * 0.05;
        const altura = Math.min(larguraTela, alturaTela) * 0.05;
        const colidiu = false;
        const position = {
            x: Math.random() * (larguraTela - largura) + largura,
            y: -100,
        };
        super(largura, altura, colidiu, position);
        this.velocidade = alturaTela * 0.003;
        this.rotationSpeed = 0.5;
        this.image = this.getImg(CAMINHO_PEDRA_IMAGE);
        this.angle = 0;
    }

    getImg = (path: string) => {
        const image = new Image();
        image.src = path;
        return image;
    };

    numeroAleatorio = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    draw = (context: CanvasRenderingContext2D) => {
        context.save();

        context.translate(
            this.position.x + this.largura / 2,
            this.position.y + this.altura / 2
        );
        this.angle += this.rotationSpeed;
        context.rotate((this.angle * Math.PI) / 180);
        context.drawImage(
            this.image,
            -this.largura / 2,
            -this.altura / 2,
            this.largura,
            this.altura
        );

        context.restore();
    };

    mover = () => {
        this.position.y += this.velocidade;
    };

    renderizar = (rocks: Rock, context: CanvasRenderingContext2D) => {
        rocks.mover();
        rocks.draw(context);
    };
}
