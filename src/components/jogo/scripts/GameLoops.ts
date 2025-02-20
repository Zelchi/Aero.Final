import { keys } from "./Inputs";
import { Player } from "../classes/Player";
import { Rock } from "../classes/Rock";

export const atualizaJogador = (tela: TamanhoTela, context: CanvasRenderingContext2D, player: Player) => {
    function draw() { //Pegar o o tempo e colocar como o modificador de velocidade
        context.clearRect(0, 0, tela.largura, tela.altura);
        context.save();
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