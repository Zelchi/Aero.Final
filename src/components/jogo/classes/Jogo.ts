import { Player } from './Player';
import { Rock } from './Rock';

export class Jogo {
    player: Player;
    rock: Rock;

    constructor(player: Player, rock: Rock) {
        this.player = player;
        this.rock = rock;
    }

    renderizarJogo = (context: CanvasRenderingContext2D) => {
        const draw = () => { //Pegar o o tempo e colocar como o modificador de velocidade
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Limpa para o novo frame
            context.save(); // Salvando o estado do contexto

            this.rock.renderizar(this.rock, context);
            this.player.renderizar(this.player, context, { largura: context.canvas.width, altura: context.canvas.height });

            context.restore(); // Restaurando o estado do contexto
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }
}