import styled from "styled-components";
import { Tela } from "./components/jogo/Tela";
import { BarraJanela } from "./components/menu/BarraJanela";
import { useState, useEffect } from "react";
import { useSound } from "./utils/hooks/useSound";
import { Menu } from "./components/menu/Menu";

const Jogo = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;
`;

function App() {
  const [isRun, setIsRun] = useState(false);
  const [isCheia, setIsCheia] = useState(true);

  useEffect(() => {
    window.api.receive("telacheia", (b: boolean) => {
      setIsCheia(b);
    });
  }, [isCheia]);

  return (
    <Jogo>
      {!isCheia && <BarraJanela isCheia={isCheia} />}
      {!isRun && <Menu {...{ isRun, setIsRun }} />}
      {isRun && <Tela {...{ isRun, setIsRun }} />}
    </Jogo>
  );
}

export default App;
