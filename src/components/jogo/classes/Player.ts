import { INITIAL_FRAME, PATH_SPACESHIP_IMAGE } from "../../../utils/Constantes";
import { PATH_ENGINE_IMAGE } from "../../../utils/Constantes";
import { PATH_ENGINE_SPRITES_IMAGE } from "../../../utils/Constantes";

class Player {
	width: number;
	height: number;
	position: { x: number; y: number };
	speed: number;
	rotation: number;
	engineImage: HTMLImageElement;
	engineSprites: HTMLImageElement;
	frameConter: number;
	image: HTMLImageElement;
	sx: number;
	constructor(Width: number, Height: number) {
		this.width = Height * 0.2;
		this.height = Height * 0.2;
		this.speed = Height * 0.007;
		this.rotation = 0;
		this.sx = 0;
		this.frameConter = INITIAL_FRAME;
		this.position = {
			x: Width / 2 - this.width / 2,
			y: Height - this.height - 30,
		};
		this.image = this.getImg(PATH_SPACESHIP_IMAGE);
		this.engineImage = this.getImg(PATH_ENGINE_IMAGE);
		this.engineSprites = this.getImg(PATH_ENGINE_SPRITES_IMAGE);
	}

	getImg(path: string) {
		const image = new Image();
		image.src = path;
		return image;
	}

	rotate(angle: number) {
		this.rotation = angle;
	}

	moveLeft() {
		this.position.x -= this.speed;
	}
	moveRight() {
		this.position.x += this.speed;
	}
	moveUp() {
		this.position.y -= this.speed;
	}
	moveDown() {
		this.position.y += this.speed;
	}

	draw(context: CanvasRenderingContext2D) {
		context.translate(
			this.position.x - this.width,
			this.position.y - this.height
		);
		context.rotate(this.rotation);
		context.translate(-this.width / 2, -this.height / 2);

		context.drawImage(this.image, 0, 0, this.width, this.height);
		context.drawImage(
			this.engineSprites,
			this.sx,
			0,
			48,
			48,
			0,
			10,
			this.width,
			this.height
		);
		context.drawImage(this.engineImage, 0, 5, this.width, this.height);
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
