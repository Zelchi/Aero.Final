import { Player } from "./Player";
import { Rock } from "./Rock";
import { Disparo } from "./Disparo";

// Classe jogo é responsável por renderizar o jogo.
// Todas as entidades do jogo são renderizadas aqui.
// Estão encapsuladas no objeto jogo.
export class Jogo {
  player: Player;
  rocks: Rock[];
  disparos: Disparo[];

  constructor(player: Player) {
    this.player = player;
    this.rocks = [];
    this.disparos = [];
  }

  renderizarJogo = (context: CanvasRenderingContext2D) => {
    const draw = () => {
      //Pegar o o tempo e colocar como o modificador de velocidade
      context.imageSmoothingEnabled = false;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Limpa para o novo frame
      context.save(); // Salvando o estado do contexto

      // Renderiza o array de pedras
      this.rocks.forEach((rock, index) => {
        rock.renderizar(rock, context);
        if (rock.position.y > context.canvas.height) {
          this.rocks.splice(index, 1);
        }
      });

      this.player.renderizar(this.player, context, {
        largura: context.canvas.width,
        altura: context.canvas.height,
      });
      this.disparos.forEach((disparo, index) => {
        disparo.renderizar(context);
        if (disparo.position.y > context.canvas.height) {
          this.disparos.splice(index, 1);
        }
      });
      context.restore(); // Restaurando o estado do contexto
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);

    this.gerarPedras(context, 2000);

    this.disparar();

    // Evento de mover o mouse
    context.canvas.addEventListener("mousemove", (e) => {
      this.player.mira(e);
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
  /// Disparo On Click
  disparar = () => {
    addEventListener("click", () => {
      const novoDisparo = new Disparo(
        { x: this.player.position.x, y: this.player.position.y },
        10
      );
      this.disparos.push(novoDisparo);
    });
  };
  // Gera as pedras a cada (2000) = 2 segundos.
  gerarPedras = (context: CanvasRenderingContext2D, intervalo: number) => {
    setInterval(() => {
      const novaPedra = new Rock(context.canvas.width, context.canvas.height);
      this.rocks.push(novaPedra);
    }, intervalo);
  };
}
