import { Player } from '../classes/Player'

export const keys = {
	left: false,
	right: false,
	up: false,
	down: false,
};

export const keydown = (key: string, player: Player) => {
	if (key === "a") keys.left = true;
	if (key === "d") keys.right = true;
	if (key === "w") keys.up = true;
	if (key === "s") keys.down = true;

	const playerVelocidade = player.velocidade;
	if (
		(keys.up && keys.left) ||
		(keys.up && keys.right) ||
		(keys.down && keys.left) ||
		(keys.down && keys.right)
	) {
		player.velocidade * 0.7071;
	};
	player.velocidade = playerVelocidade;
};

export const keyup = (key: string) => {
	if (key === "a") keys.left = false;
	if (key === "d") keys.right = false;
	if (key === "w") keys.up = false;
	if (key === "s") keys.down = false;
};

export const miraMouse = (aim: MouseEvent, player: Player) => {
	let angle = Math.atan2(aim.pageX - (player.position.x + player.altura * 0.5), -(aim.pageY - (player.position.y + player.largura * 0.5)));
	player.rotate(angle);
};