import { Player } from "./Player";
import { Rocks } from "./Rock";
import { Projeteis } from "./Disparo";
import { Crosshair } from "./Crosshair";
import { Background } from "./Background";
import { Eventos } from "./Colisão";

// Classe jogo é responsável por renderizar o jogo.
// Todas as entidades do jogo são renderizadas aqui.
// Estão encapsuladas no objeto jogo.
export class Jogo {
    context: CanvasRenderingContext2D;
    player: Player;
    crosshair: Crosshair;
    rocks: Rocks;
    projeteis: Projeteis;
    background: Background;
    eventos: Eventos;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.player = new Player(context.canvas.width, context.canvas.height);
        this.crosshair = new Crosshair(context);
        this.background = new Background(context, 100);
        this.projeteis = new Projeteis(context);
        this.rocks = new Rocks(context);
        this.eventos = new Eventos(context);
    }

    renderizarJogo = () => {
        this.rocks.gerarPedras(this.context, 1000);
        this.inputsJogador();

        // Desenha o jogo
        const draw = () => {
            this.context.imageSmoothingEnabled = false;
            this.context.clearRect(
                0,
                0,
                this.context.canvas.width,
                this.context.canvas.height
            );
            this.context.save();

            // Verifica a colisão entre as pedras e os disparos
            this.eventos.verificarColisao(this.rocks.rocks, this.projeteis.projeteis);
            // Cria os diparos do jogador
            this.rocks.renderizar();
            // Renderiza o background
            this.projeteis.renderizar();
            // Renderiza as pedras
            this.crosshair.renderizar();
            // Renderiza o player
            this.background.renderizar();
            // Renderiza o crosshair
            this.player.ajustarAngulo({ x: this.crosshair.x, y: this.crosshair.y });
            this.player.renderizar(this.player, this.context);
            this.context.restore(); // Restaurando o estado do contexto

            requestAnimationFrame(draw);
        };
        requestAnimationFrame(draw);
    };

    inputsJogador = () => {
        // Evento de mover o mouse
        document.addEventListener("mousemove", (e) => {
            this.crosshair.update({ x: e.clientX, y: e.clientY });
        });

        // Evento de pressionar clique do mouse
        document.addEventListener("click", () => {
            this.projeteis.criarDisparo({
                x: this.player.position.x + this.player.largura / 2,
                y: this.player.position.y + this.player.altura / 2,
            },
                this.player.angulo - Math.PI / 2);
        });

        // Evento de pressionar a tecla
        document.addEventListener("keydown", (e) => {
            const key = e.key.toLowerCase();
            this.player.keydown(key);
        });

        // Evento de soltar a tecla
        document.addEventListener("keyup", (e) => {
            const key = e.key.toLowerCase();
            this.player.keyup(key);
        });
    };
}
