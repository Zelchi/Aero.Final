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
    //background
    context.fillStyle = "#000000";
    context.fillRect(0, 0, 600, 600);
    //barreira 1
    context.fillStyle = "rgb(119, 6, 5)";
    context.fillRect(150, 450, 60, 15);
    //barreira 2
    context.fillStyle = "rgb(119, 6, 5)";
    context.fillRect(400, 450, 60, 15);
    //player
    const player = new Player();
    player.draw(context, canvas);
  }, []);

  return <Tela ref={canvasRef} width="600" height="600" />;
};

export default Canvas;
