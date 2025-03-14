export class Aliado {
    public static lista: Aliado[] = [];
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
        Aliado.lista = Aliado.lista.filter((entidade) => {
            return !entidade.colidiu
        });
    }

    private destruirForaDaTela = () => {
        Aliado.lista = Aliado.lista.filter((entidade) => {
            return entidade.position.y < window.innerHeight && entidade.position.x < window.innerWidth;
        });
    }

    private registrar = () => {
        this.destruirContato();
        this.destruirForaDaTela();
        Aliado.lista.push(this);
    }
}