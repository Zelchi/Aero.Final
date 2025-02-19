export const keys = {
    left: false,
    right: false,
    up: false,
    down: false,
};

export const keydown = (key: string, player: any, playerSpeed: number) => {

    if (key === "a") keys.left = true;
    if (key === "d") keys.right = true;
    if (key === "w") keys.up = true;
    if (key === "s") keys.down = true;

    if (keys.up && keys.left ||
        keys.up && keys.right ||
        keys.down && keys.left ||
        keys.down && keys.right) {
        player.speed = playerSpeed * 0.7071;
    } else {
        player.speed = playerSpeed;
    }
}

export const keyup = (key: string) => {
    if (key === "a") keys.left = false;
    if (key === "d") keys.right = false;
    if (key === "w") keys.up = false;
    if (key === "s") keys.down = false;
}

export const miraMouse = (aim: MouseEvent, player: any,) => {
    let angle = Math.atan2(aim.pageX - player.position.x, aim.pageY - player.position.y);
}