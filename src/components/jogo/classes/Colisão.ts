export class Eventos {
    private context: CanvasRenderingContext2D;
    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }


    public verificarColisao = (
        entidadesA: { position: { x: number, y: number }, largura: number, altura: number, colidiu: boolean }[],
        entidadesB: { position: { x: number, y: number }, largura: number, altura: number, colidiu: boolean }[]
    ): void => {
        for (const entidadeA of entidadesA) {
            for (const entidadeB of entidadesB) {
                if (
                    entidadeA.position.x < entidadeB.position.x + entidadeB.largura &&
                    entidadeA.position.x + entidadeA.largura > entidadeB.position.x &&
                    entidadeA.position.y < entidadeB.position.y + entidadeB.altura &&
                    entidadeA.position.y + entidadeA.altura > entidadeB.position.y
                ) {
                    entidadeA.colidiu = true;
                    entidadeB.colidiu = true;
                }
            }
        }
    }


}