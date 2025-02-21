import { Player } from './Player';
import { Rock } from './Rock';
import { renderizarPlayer, renderizarPedras } from '../scripts/GameLoops';

export class Jogo {
    player: Player;
    rocks: Rock[];

    constructor(player: Player, rocks: Rock[]) {
        this.player = player;
        this.rocks = rocks;
    }

    renderizarJogo = (context: CanvasRenderingContext2D) => {
        const draw = () => { //Pegar o o tempo e colocar como o modificador de velocidade
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Limpa para o novo frame
            context.save(); // Salvando o estado do contexto

            renderizarPedras(this.rocks, context);
            renderizarPlayer(this.player, context, { largura: context.canvas.width, altura: context.canvas.height });

            context.restore(); // Restaurando o estado do contexto
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }
}