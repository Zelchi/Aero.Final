import { keys } from "./Inputs";
import { Player } from "../classes/Player";
import { Rock } from "../classes/Rock";

export const renderizarPlayer = (player: Player, context: CanvasRenderingContext2D, tela: TamanhoTela) => {
    context.translate(
        player.position.x + player.largura / 2,
        player.position.y + player.altura / 2
    );
    if (keys.left && player.position.x >= 0) {
        player.moveLeft();
    }
    if (keys.right && player.position.x < tela.largura - player.largura) {
        player.moveRight();
    }
    if (keys.up && player.position.y >= 1) {
        player.moveUp();
    }
    if (keys.down && player.position.y < tela.altura - player.altura) {
        player.moveDown();
    }
    context.translate(
        -player.position.x - player.largura / 2,
        -player.position.y - player.altura / 2
    );
    player.draw(context);
};

export const renderizarPedras = (rocks: Rock[], context: CanvasRenderingContext2D) => {
    console.log(rocks)
    rocks.forEach((rock) => {
        console.log("batata")
        context.translate(rock.position.x, rock.position.y);
        rock.mover();
        context.translate(-rock.position.x, -rock.position.y);
        rock.draw(context);
    });
}