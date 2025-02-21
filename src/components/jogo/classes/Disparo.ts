export class Disparo {
    position: { x: number; y: number };
    velocity: number;
    largura: number;
    altura: number;
    angulo: number;
    constructor(
        position: { x: number; y: number },
        velocity: number,
        angulo: number
    ) {
        this.position = position;
        this.largura = 20;
        this.altura = 2;
        this.velocity = velocity;
        this.angulo = angulo;
    }
    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.angulo);
        context.fillStyle = "white";
        context.fillRect(0, 0, this.largura, this.altura);
        context.restore();
    }
    renderizar(context: CanvasRenderingContext2D) {
        this.draw(context);
        this.position.x += Math.cos(this.angulo) * this.velocity;
        this.position.y += Math.sin(this.angulo) * this.velocity;
    }
}
