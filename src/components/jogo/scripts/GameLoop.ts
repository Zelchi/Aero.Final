import Player from "../../../classes/Player";
import Rock from "../../../classes/Rock";
type Keys = {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
};
const gameLoop = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  keys: Keys,
  player: Player,
  rock: Rock
) => {
  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (keys.left && player.position.x >= 1) {
      player.moveLeft();
    }
    if (keys.right && player.position.x < canvas.width - player.width * 1.2) {
      player.moveRight();
    }
    if (keys.up && player.position.y >= 1) {
      player.moveUp();
    }
    if (keys.down && player.position.y < canvas.height - player.height * 1.2) {
      player.moveDown();
    }
    player.draw(context);
    rock.draw(context);
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
};
export default gameLoop;
