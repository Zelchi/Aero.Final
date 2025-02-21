export class Disparo {
    position: { x: number; y: number };
    velocity: number;
    largura: number;
    altura: number;
    angulo: number;
    constructor(
        position: { x: number; y: number },
        angulo: number
    ) {
        this.position = position;
        this.largura = 10;
        this.altura = 10;
        this.velocity = 10;
        this.angulo = angulo;
    }
    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.translate(this.position.x - this.largura, this.position.y - this.altura);
        context.fillStyle = "white";
        context.fillRect((this.largura / 2), (this.altura / 2), this.largura, this.altura);
        context.restore();
    }
    renderizar(context: CanvasRenderingContext2D) {
        this.draw(context);
        this.position.x += Math.cos(this.angulo) * this.velocity;
        this.position.y += Math.sin(this.angulo) * this.velocity;
    }
}