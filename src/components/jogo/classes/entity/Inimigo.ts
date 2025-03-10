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
}