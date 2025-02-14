import styled from 'styled-components'
import { Tela } from './components/Tela'

const Jogo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

function App() {
    return (
        <Jogo>
            <Tela />
        </Jogo>
    )
}

export default App