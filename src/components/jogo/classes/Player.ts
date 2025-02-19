import {
    INITIAL_FRAME,
    PATH_SPACESHIP_IMAGE,
    PATH_ENGINE_IMAGE,
    PATH_ENGINE_SPRITES_IMAGE,
} from "../../../utils/Constantes";

class Player {
    largura: number;
    altura: number;
    position: { x: number; y: number };
    velocidade: number;
    angulo: number;
    engineImage: HTMLImageElement;
    engineSprites: HTMLImageElement;
    frameConter: number;
    image: HTMLImageElement;
    sx: number;
    hitbox: { x: number; y: number; radius: number };

    constructor(larguraTela: number, alturaTela: number) {
        this.largura = alturaTela * 0.1;
        this.altura = alturaTela * 0.1;
        this.velocidade = alturaTela * 0.007;
        this.angulo = 0;
        this.sx = 0;
        this.frameConter = INITIAL_FRAME;
        this.position = {
            x: larguraTela / 2 - this.largura / 2,
            y: alturaTela - this.altura - 30,
        };
        this.image = this.getImg(PATH_SPACESHIP_IMAGE);
        this.engineImage = this.getImg(PATH_ENGINE_IMAGE);
        this.engineSprites = this.getImg(PATH_ENGINE_SPRITES_IMAGE);
        this.hitbox = {
            x: this.position.x + this.largura / 2,
            y: this.position.y + this.altura / 2,
            radius: Math.min(this.largura, this.altura) / 2,
        };
    }

    getImg(path: string) {
        const image = new Image();
        image.src = path;
        return image;
    }

    rotate(angle: number) {
        this.angulo = angle;
    }

    moveLeft() {
        this.position.x -= this.velocidade;
        this.updateHitbox();
    }
    moveRight() {
        this.position.x += this.velocidade;
        this.updateHitbox();
    }
    moveUp() {
        this.position.y -= this.velocidade;
        this.updateHitbox();
    }
    moveDown() {
        this.position.y += this.velocidade;
        this.updateHitbox();
    }

    updateHitbox() {
        this.hitbox.x = this.position.x + this.largura / 2;
        this.hitbox.y = this.position.y + this.altura / 2;
    }

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.hitbox.x, this.hitbox.y);
        context.rotate(this.angulo);
        context.translate(-this.hitbox.x, -this.hitbox.y);

        // Acho que é a nave :)
        context.fillRect(this.position.x, this.position.y, this.largura, this.altura);
        context.drawImage(this.image, this.position.x, this.position.y, this.largura, this.altura);
        context.drawImage(this.engineSprites, this.sx, 0, 48, 48, this.position.x, this.position.y + 10, this.largura, this.altura);
        context.drawImage(this.engineImage, this.position.x, this.position.y + 5, this.largura, this.altura);

        // Hitbox
        context.strokeStyle = 'red';
        context.beginPath();
        context.arc(this.hitbox.x, this.hitbox.y, this.hitbox.radius, 0, Math.PI * 2);
        context.stroke();

        context.restore();
        this.updateSprite();
    }

    updateSprite() {
        if (this.frameConter == 0) {
            if (this.sx == 96) {
                this.sx = 0;
            } else {
                this.sx += 48;
            }
            this.frameConter = INITIAL_FRAME;
        }
        this.frameConter--;
    }
}

export default Player;
