import { useState, useEffect } from "react";
import { filtroRetro } from "../../utils/FiltroRetro";
import styled from "styled-components";
import Canvas from "./Canvas";

const Caixa = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${filtroRetro()};

  background-color: #1c1c1c;
`;

export const Tela = ({ setIsRun }: isRun) => {
  const [tamanhoTela, setTamanhoTela] = useState({
    largura: window.innerWidth,
    altura: window.innerHeight,
  });

  const handleResize = () => {
    setTamanhoTela({ largura: window.innerWidth, altura: window.innerHeight });
    setIsRun(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth, window.innerHeight]);

  return (
    <Caixa>
      <Canvas
        $largura={tamanhoTela.largura - 150}
        $altura={tamanhoTela.altura - 150}
        setIsRun={setIsRun}
      />
    </Caixa>
  );
};
