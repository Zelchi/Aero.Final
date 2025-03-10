import { Crosshair } from "./Crosshair";
import { Projeteis } from "./Disparo";
import { Player } from "./Player";
import { Inimigo } from "./entity/Inimigo";
import { Aliado } from "./entity/Aliado";

export class Eventos {

    private vereficadorDeColisao = (
        entidadeA: { position: { x: number, y: number }, altura: number, largura: number, colidiu: boolean },
        entidadeB: { position: { x: number, y: number }, altura: number, largura: number, colidiu: boolean }
    ) => {
        if (entidadeA.colidiu || entidadeB.colidiu) return;
        const colidiu = (
            entidadeA.position.x < entidadeB.position.x + entidadeB.largura &&
            entidadeA.position.x + entidadeA.largura > entidadeB.position.x &&
            entidadeA.position.y < entidadeB.position.y + entidadeB.altura &&
            entidadeA.position.y + entidadeA.altura > entidadeB.position.y
        );
        entidadeA.colidiu = colidiu;
        entidadeB.colidiu = colidiu;
    };

    public verificarColisao = (entidadesA: Inimigo[], entidadesB: Aliado[]) => {
        for (const entidadeA of entidadesA) {
            for (const entidadeB of entidadesB) {
                this.vereficadorDeColisao(entidadeA, entidadeB);
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