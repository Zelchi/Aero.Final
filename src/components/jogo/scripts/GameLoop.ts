import { keys } from "./Inputs";
import { Player } from "../classes/Player";
import { Rock } from "../classes/Rock";

export const atualizaJogador = (tela: TamanhoTela, context: CanvasRenderingContext2D, player: Player) => {
    function draw() {
        context.clearRect(0, 0, tela.largura, tela.altura);
        context.save();
        context.translate(
            player.position.x + player.largura / 2,
            player.position.y + player.altura / 2
        );
        if (keys.left && player.position.x >= 0) {

            player.moveLeft();
            context.rotate(-0.15);
        }
        if (keys.right && player.position.x < tela.largura - player.largura) {
            player.moveRight();
            context.rotate(0.15);
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
        context.restore();
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
};

export const atualizaInimigos = (tela: TamanhoTela, context: CanvasRenderingContext2D, rock: Rock) => {
    function draw() {
        context.clearRect(0, 0, tela.largura, tela.altura);
        rock.draw(context);
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
}