import { useRef, useEffect } from "react";
import styled from "styled-components";
import Player from "../classes/Player";

const Tela = styled.canvas`
  border: 2px solid rgba(248, 248, 248, 0.5);
  border-radius: 10px;
`;
const Canvas = () => {
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
    };
    const gameLoop = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (keys.left && player.position.x >= 0) {
        player.moveLeft();
      }
      if (keys.right && player.position.x < canvas.width - player.width) {
        player.moveRight();
      }
      player.draw(context);
      requestAnimationFrame(gameLoop);
    };

    addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();

      if (key === "a") keys.left = true;
      if (key === "d") keys.right = true;
    });
    addEventListener("keyup", (e) => {
      const key = e.key.toLowerCase();
      if (key === "a") keys.left = false;
      if (key === "d") keys.right = false;
    });
    gameLoop();
  }, []);

  return <Tela ref={canvasRef} width="600" height="600" />;
};

export default Canvas;
