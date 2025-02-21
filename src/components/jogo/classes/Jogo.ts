import { Player } from './Player';
import { Rock } from './Rock';

export class Jogo {
    player: Player;
    rocks: Rock[];

    constructor(player: Player) {
        this.player = player;
        this.rocks = [];
    }

    renderizarJogo = (context: CanvasRenderingContext2D) => {
        const draw = () => { //Pegar o o tempo e colocar como o modificador de velocidade
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Limpa para o novo frame
            context.save(); // Salvando o estado do contexto

            this.rocks.forEach((rock, index) => {
                rock.renderizar(rock, context);
                if (rock.position.y > context.canvas.height) {
                    this.rocks.splice(index, 1); // Remove a pedra que saiu da tela
                }
            });

            this.player.renderizar(this.player, context, { largura: context.canvas.width, altura: context.canvas.height });

            context.restore(); // Restaurando o estado do contexto
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);

        this.gerarPedrasPeriodicamente(context, 2000);
    }

    gerarPedrasPeriodicamente = (context: CanvasRenderingContext2D, intervalo: number) => {
        setInterval(() => {
            const novaPedra = new Rock(context.canvas.width, context.canvas.height);
            this.rocks.push(novaPedra);
        }, intervalo);
    }
}