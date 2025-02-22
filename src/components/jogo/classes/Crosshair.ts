export class Crosshair {
    context: CanvasRenderingContext2D;
    x: number;
    y: number;
    largura: number;
    altura: number;
    constructor(context: CanvasRenderingContext2D, aim: Position) {
        this.context = context;
        this.x = aim.x;
        this.y = aim.y;
        this.largura = Math.min(context.canvas.width) * 0.005;
        this.altura = Math.min(context.canvas.width) * 0.005;
    }

    update(aim: Position) {
        this.x = aim.x;
        this.y = aim.y;
    }

    renderizar() {
        this.context.save();
        this.context.fillStyle = "white";
        this.context.fillRect(this.x - this.largura / 2, this.y - this.altura / 2, this.largura, this.altura);
        this.context.restore();
    }
} 