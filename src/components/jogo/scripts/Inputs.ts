import { Player } from '../classes/Player'

export const keys = {
	left: false,
	right: false,
	up: false,
	down: false,
};

export const keydown = (key: string, player: Player, playerSpeed: number) => {
	if (key === "a") keys.left = true;
	if (key === "d") keys.right = true;
	if (key === "w") keys.up = true;
	if (key === "s") keys.down = true;

	if (
		(keys.up && keys.left) ||
		(keys.up && keys.right) ||
		(keys.down && keys.left) ||
		(keys.down && keys.right)
	) {
		player.velocidade = playerSpeed * 0.7071;
	} else {
		player.velocidade = playerSpeed;
	}
};

export const keyup = (key: string, player: Player, playerVelocidade: any) => {
	player.velocidade = playerVelocidade;

	if (key === "a") keys.left = false;
	if (key === "d") keys.right = false;
	if (key === "w") keys.up = false;
	if (key === "s") keys.down = false;
};

export const miraMouse = (aim: MouseEvent, player: Player) => {
	let angle = Math.atan2(aim.pageX - (player.position.x + player.largura * 1.3), -(aim.pageY - (player.position.y + player.largura * 1.3)));
	player.rotate(angle);
};