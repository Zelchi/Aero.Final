import styled from 'styled-components'
import { Tela } from './components/jogo/Tela'
import { BarraJanela } from './components/global/BarraJanela'

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
    return (
        <Jogo>
            <BarraJanela />
            <Tela />
        </Jogo>
    )
}

export default App