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
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.save();
            renderizarPlayer(this.player, context);
            renderizarPedras(this.rocks, context);
            context.restore();
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }
}