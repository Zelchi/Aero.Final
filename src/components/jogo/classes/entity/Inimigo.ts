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

    private destruirContato = () => {
        Inimigo.lista = Inimigo.lista.filter((entidade) => {
            return !entidade.colidiu
        });
    }

    private destruirForaDaTela = () => {
        Inimigo.lista = Inimigo.lista.filter((entidade) => {
            return entidade.position.y < window.innerHeight && entidade.position.x < window.innerWidth;
        });
    }

    private registrar = () => {
        this.destruirContato();
        this.destruirForaDaTela();
        Inimigo.lista.push(this);
    }
}