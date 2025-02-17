import styled from 'styled-components'
import { Tela } from './components/jogo/Tela'
import { BarraJanela } from './components/global/BarraJanela'
import { useState } from 'react'
import { Menu } from './components/menu/Menu'

const Jogo = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    color: white;
`

function App() {
    const [isRun, setIsRun] = useState(false);

    return (
        <Jogo>
            <BarraJanela />
            {!isRun && <Menu {...{isRun, setIsRun }} />}
            {isRun && <Tela {...{isRun, setIsRun }}/>}
        </Jogo>
    )
}

export default App