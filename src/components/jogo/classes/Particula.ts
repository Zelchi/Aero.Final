export class Particula {
    private particulas: Particula[] = [];
    private position: { x: number; y: number };
    private velocity: { x: number; y: number };
    private radius: number;
    private color: string;
    private opacity: number;

    constructor(position: { x: number; y: number }, velocity: { x: number; y: number }, radius: number, color: string) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.color = color;
        this.opacity = 1;
    };

    private draw(context: CanvasRenderingContext2D) {
        context.save();
        context.beginPath();
        context.globalAlpha = this.opacity;
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        context.restore();
    };

    private update(context: CanvasRenderingContext2D) {
        this.draw(context);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.opacity = this.opacity - 0.01 <= 0 ? 0 : this.opacity - 0.01;
    };

    public gerarParticulas = (disparoX: number, disparoY: number) => {
        for (let i = 0; i < 10; i++) {
            const particula = new Particula(
                { x: disparoX, y: disparoY },
                { x: Math.random() - 0.5 * 2, y: Math.random() - 0.5 * 2 },
                5,
                "#b1afaf"
            );
            this.particulas.push(particula);
        }
    };

    public renderizar = (context: CanvasRenderingContext2D) => {
        this.particulas.forEach((particula, index) => {
            particula.update(context);
            if (particula.opacity <= 0) {
                this.particulas.splice(index, 1);
            };
        });
    };
};