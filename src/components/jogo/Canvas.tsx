import { useEffect, useRef, useState } from "react";
import { keydown, keyup, miraMouse } from "./scripts/Inputs";
import { Player } from "./classes/Player";
import { Rock } from "./classes/Rock";
import { Jogo } from "./classes/Jogo";
import styled from "styled-components";

const Canva = styled.canvas`
    cursor: crosshair;
    border: solid 3px white;
    background-color: #2c2c2c;
    z-index: 5;
`;

export const Canvas = ({ $largura, $altura, setIsRun }: Canvas) => {
    const [tela] = useState({ largura: $largura, altura: $altura });
    const [player] = useState(new Player(tela.largura, tela.altura));
    const [rock] = useState(new Rock(tela.largura, tela.altura));
    const canvasRef = useRef<HTMLCanvasElement>(null);

    addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();
        keydown(key, player);
        if (key === "escape") setIsRun(false);
    });

    addEventListener("keyup", (e) => {
        const key = e.key.toLowerCase();
        keyup(key);
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
        new Jogo(player, rock).renderizarJogo(context);
    }, []);

    return <Canva ref={canvasRef} width={$largura} height={$altura} />;
};