import Player from "../classes/Player";
import Rock from "../classes/Rock";

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
  rocks: Rock[]
) => {
  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.save();

    context.translate(
      player.position.x + player.largura / 2,
      player.position.y + player.altura / 2
    );

    if (keys.left && player.position.x >= 0) {
      player.moveLeft();
      context.rotate(-0.15);
    }
    if (keys.right && player.position.x < canvas.width - player.largura) {
      player.moveRight();
      context.rotate(0.15);
    }
    if (keys.up && player.position.y >= 1) {
      player.moveUp();
    }
    if (keys.down && player.position.y < canvas.height - player.altura) {
      player.moveDown();
    }
    context.translate(
      -player.position.x - player.largura / 2,
      -player.position.y - player.altura / 2
    );

    player.draw(context);

    context.restore();

    rocks.forEach((rock) => {
      rock.atualizarRock();
      rock.draw(context);
    });

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
};
export default gameLoop;
