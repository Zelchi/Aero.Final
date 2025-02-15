import { useRef, useEffect } from "react";
import styled from "styled-components";

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
    context.scale(1, 1);
    context.fillStyle = "#000000";
    context.fillRect(0, 0, 600, 600);
    context.fillStyle = "rgb(119, 6, 5)";
    context.fillRect(150, 450, 70, 10);
    context.fillStyle = "rgb(119, 6, 5)";
    context.fillRect(400, 450, 70, 10);
  }, []);

  return <Tela ref={canvasRef} width="600" height="600" />;
};

export default Canvas;
