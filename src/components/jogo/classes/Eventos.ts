import { Crosshair } from "./Crosshair";
import { Projeteis } from "./Disparo";
import { Player } from "./Player";
import { Inimigo } from "./Inimigo";
import { Disparo } from "./Disparo";

export class Eventos {

    public verificarColisao = (
        entidadesA: Inimigo[],
        entidadesB: Disparo[],
    ): void => {
        for (const entidadeA of entidadesA) {
            for (const entidadeB of entidadesB) {
                entidadeA.vereficadorDeColisao(entidadeB);
            }
        }
    }

    public inputTecla = (player: Player) => {
        // Evento de pressionar a tecla
        document.addEventListener("keydown", (e) => {
            const key = e.key.toLowerCase();
            player.keydown(key);
        });

        // Evento de soltar a tecla
        document.addEventListener("keyup", (e) => {
            const key = e.key.toLowerCase();
            player.keyup(key);
        });
    };

    public inputMouse = (crosshair: Crosshair, player: Player, projeteis: Projeteis) => {
        // Evento de mover o mouse
        document.addEventListener("mousemove", (e) => {
            crosshair.update({ x: e.clientX, y: e.clientY });
        });

        // Evento de pressionar clique do mouse
        document.addEventListener("click", () => {
            projeteis.criarDisparo({
                x: player.position.x + player.largura / 2,
                y: player.position.y + player.altura / 2,
            },
                player.angulo - Math.PI / 2);
        });
    }
}