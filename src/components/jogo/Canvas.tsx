import { useEffect, useRef, useState } from "react";
import { Player } from "./classes/Player";
import { Jogo } from "./classes/Jogo";
import styled from "styled-components";

const Canva = styled.canvas`
  cursor: none;
  border: solid 3px white;
  background-color: #2c2c2c;
  z-index: 5;
`;

export const Canvas = ({ $largura, $altura, setIsRun }: Canvas) => {
  const [tela] = useState({ largura: $largura, altura: $altura });
  const [player] = useState(new Player(tela.largura, tela.altura));
  const canvasRef = useRef<HTMLCanvasElement>(null);

  addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (key === "escape") setIsRun(false);
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const jogo = new Jogo(player);
    jogo.renderizarJogo(context!);
  }, []);

  return <Canva ref={canvasRef} width={$largura} height={$altura} />;
};
