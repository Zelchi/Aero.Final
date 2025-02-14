import styled from 'styled-components'

const Jogo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100vw;

    background-color: #1c1c1c;
    color: white;
`

function App() {
    return (
        <Jogo>
            Aqui vai ficar a tela
        </Jogo>
    )
}

export default App
