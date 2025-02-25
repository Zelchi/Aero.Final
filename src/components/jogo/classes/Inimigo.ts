export class Inimigo {
    public static lista: Inimigo[] = [];
    public position: Position;
    public largura: number;
    public altura: number;
    public colidiu: boolean;

    constructor(largura: number, altura: number, colidiu: boolean, position: Position) {
        this.registrar();
        this.position = position;
        this.largura = largura;
        this.altura = altura;
        this.colidiu = colidiu;
    }

    private registrar = () => {
        Inimigo.lista.push(this);
    }

    public vereficadorDeColisao = (entidade: { position: { x: number, y: number }, altura: number, largura: number, colidiu: boolean }) => {
        if (this.colidiu) return;
        this.colidiu = (
            this.position.x < entidade.position.x + entidade.largura &&
            this.position.x + this.largura > entidade.position.x &&
            this.position.y < entidade.position.y + entidade.altura &&
            this.position.y + this.altura > entidade.position.y
        );
        entidade.colidiu = this.colidiu;
    };
}