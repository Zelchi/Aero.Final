import { useRef, useEffect } from "react";
import styled from "styled-components";

const Tela = styled.canvas`
  height: 100%;
  width: 100%;
  border: 2px solid white;
`;

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.fillStyle = "#2e0303";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "rgb(200,0,0)";
    context.fillRect(10, 10, 55, 50);
    context.fillStyle = "rgba(248, 248, 248, 0.5)";
    // context.fillRect(30, 30, 55, 50);
    context.fillRect(25, 25, 100, 100);
    context.clearRect(45, 45, 60, 60);
    context.strokeRect(50, 50, 50, 50);
  }, []);

  return <Tela ref={canvasRef} />;
};

export default Canvas;
