import { useRef, useEffect } from "react";
import Player from "../../classes/Player";
import styled from "styled-components";

const TelaCanvas = styled.canvas`
`

const Canvas = ({ $largura, $altura}: tamanhoTela) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const player = new Player(canvas.width, canvas.height);
        const keys = {
            left: false,
            right: false,
            up: false,
            down: false,
        };
        const gameLoop = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (keys.left && player.position.x >= 0) {
                player.moveLeft();
            }
            if (keys.right && player.position.x < canvas.width - player.width - 10) {
                player.moveRight();
            }
            if (keys.up && player.position.y >= 0) {
                player.moveUp();
            }
            if (keys.down && player.position.y < canvas.height - player.height - 10) {
                player.moveDown();
            }
            player.draw(context);
            requestAnimationFrame(gameLoop);
        };

        addEventListener("keydown", (e) => {
            const key = e.key.toLowerCase();

            if (key === "a") keys.left = true;
            if (key === "d") keys.right = true;
            if (key === "w") keys.up = true;
            if (key === "s") keys.down = true;
        });
        addEventListener("keyup", (e) => {
            const key = e.key.toLowerCase();
            if (key === "a") keys.left = false;
            if (key === "d") keys.right = false;
            if (key === "w") keys.up = false;
            if (key === "s") keys.down = false;
        });
        gameLoop();
    }, []);

    return <TelaCanvas ref={canvasRef} width={$largura} height={$altura} />;
};

export default Canvas;