export class Background {
    private context: CanvasRenderingContext2D;
    private particulas: Particula[] = [];
    private quantidadeParticulas: number;
    private contador: number

    constructor(context: CanvasRenderingContext2D, quantidadeParticulas: number) {
        this.context = context;
        this.quantidadeParticulas = quantidadeParticulas;
        this.contador = 0;
    }

    // Criador de particulas verifica se o array de particulas é menor que a quantidade de particulas
    // Se for menor, ele cria uma nova particula e adiciona ao array
    // Fazendo assim, o background terá sempre a quantidade de particulas desejada
    // As qu sai da tela são destruidas e novas são criadas
    private criadorDeParticulas = () => {
        const inicio = {
            x: 0,
            y: 0,
            radius: this.numeroAleatorio(1, 3),
            opacity: this.numeroAleatorio(0.3, 0.9),
        };
        for (let i = this.particulas.length; i < this.quantidadeParticulas; i++) {
            this.contador++;
            if (this.contador < this.quantidadeParticulas) {
                inicio.x = this.numeroAleatorio(0, this.context.canvas.width);
                inicio.y = this.numeroAleatorio(0, this.context.canvas.height);
            } else {
                inicio.x = this.numeroAleatorio(0, this.context.canvas.width);
                inicio.y = 0;
            }
            const particula = new Particula(this.context, inicio.x, inicio.y, inicio.radius, inicio.opacity);
            if (this.particulas.length < 50) {
                this.particulas.push(particula);
            }
        }
    };

    // Função que gera um numero aleatorio
    private numeroAleatorio(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    // Desenho as particulas no background
    private desenhar = () => {
        this.particulas.forEach((particula) => {
            particula.desenhar(this.context);
        });
    };

    // Movimento das particulas no background
    private moverParticulas = () => {
        this.particulas.forEach((particula) => {
            particula.position.y += 1
        });
    };

    // O filtro pega apenas as particulas que estão dentro da tela e devolve um novo array com elas.
    // Descartando as que já sairam da tela para abrir espaço para novas particulas.
    private limparForaDaTela = () => {
        this.particulas = this.particulas.filter((particula) => {
            return particula.position.y < this.context.canvas.height
        });
    };

    // Função que renderiza o background
    public renderizar = () => {
        this.criadorDeParticulas();
        this.desenhar();
        this.moverParticulas();
        this.limparForaDaTela();
    };
}

class Particula {
    public position: { x: number; y: number };
    public context: CanvasRenderingContext2D;
    private radius: number;
    private color: string;
    private opacity: number;

    constructor(context: CanvasRenderingContext2D, x: number, y: number, radius: number, opacity: number) {
        this.context = context;
        this.color = "#b1afaf";
        this.position = {
            x: x,
            y: y,
        };
        this.radius = radius
        this.opacity = opacity;
    }

    public desenhar = (context: CanvasRenderingContext2D) => {
        context.save();
        context.globalAlpha = this.opacity;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.restore();
    };
}