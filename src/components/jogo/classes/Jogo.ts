import { Player } from './Player';
import { Rock } from './Rock';

// Classe jogo é responsável por renderizar o jogo.
// Todas as entidades do jogo são renderizadas aqui.
// Estão encapsuladas no objeto jogo.
export class Jogo {
    context: CanvasRenderingContext2D;
    player: Player;
    rocks: Rock[];

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.player = new Player(context.canvas.width, context.canvas.height);
        this.rocks = [];
    }

    renderizarJogo = () => {
        const draw = () => { //Pegar o o tempo e colocar como o modificador de velocidade
            this.context.imageSmoothingEnabled = false;
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Limpa para o novo frame
            this.context.save(); // Salvando o estado do contexto

            // Renderiza o array de pedras
            this.rocks.forEach((rock, index) => {
                rock.renderizar(rock, this.context);
                if (rock.position.y > this.context.canvas.height) {
                    this.rocks.splice(index, 1);
                }
            });

            this.player.renderizar(this.player, this.context, { largura: this.context.canvas.width, altura: this.context.canvas.height });

            this.context.restore(); // Restaurando o estado do contexto
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);

        this.gerarPedras(this.context, 2000);

        // Evento de mover o mouse
        document.addEventListener('mousemove', (e) => {
            this.player.mira({ x: e.clientX, y: e.clientY });
        });

        // Evento de pressionar a tecla
        document.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            this.player.keydown(key);
            this.player.mira(this.player.miraPosition);
        });

        // Evento de soltar a tecla
        document.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            this.player.keyup(key);
            this.player.mira(this.player.miraPosition);
        });
    }

    // Gera as pedras a cada (2000) = 2 segundos.
    gerarPedras = (context: CanvasRenderingContext2D, intervalo: number) => {
        setInterval(() => {
            const novaPedra = new Rock(context.canvas.width, context.canvas.height);
            this.rocks.push(novaPedra);
        }, intervalo);
    }
}