import { useEffect, useRef, useState } from "react";
import { keydown, keyup, keys, miraMouse } from "./scripts/Inputs";
import Player from "./classes/Player";
import Rock from "./classes/Rock";
import gameLoop from "./scripts/GameLoop";
import styled from "styled-components";

const Canva = styled.canvas`
  cursor: crosshair;
  border: solid 3px white;
  background-color: #2c2c2c;
  z-index: 5;
`;

const Canvas = ({ $largura, $altura, setIsRun }: Canvas) => {
  const [player] = useState(new Player($largura, $altura));
  const [playerVelocidade] = useState(player.velocidade);
  const [rocks, setRocks] = useState<Rock[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const addRock = () => {
    setRocks((prevRocks) => [...prevRocks, new Rock($altura, $largura)]);
  };

  addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    keydown(key, player, playerVelocidade);
    if (key === "escape") setIsRun(false);
  });

  addEventListener("keyup", (e) => {
    const key = e.key.toLowerCase();
    keyup(key, player, playerVelocidade);
  });

  addEventListener("mousemove", (e) => {
    const aim = e;
    miraMouse(aim, player);
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.imageSmoothingEnabled = false;

    gameLoop(canvas, context, keys, player, rocks);

    const interval = setInterval(() => addRock(), 2000);
    return () => clearInterval(interval);
  }, [player, canvasRef, rocks]);

  return <Canva ref={canvasRef} width={$largura} height={$altura} />;
};

export default Canvas;
