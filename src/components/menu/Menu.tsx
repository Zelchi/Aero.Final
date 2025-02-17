import styled from 'styled-components'

const Tela = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #1c1c1c;
`

const Caixa = styled.div`
    height: 80%;
    width: 80%;
    background-color: #1c6c6c;
    padding: 10px;
    border: 3px outset gray;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        align-items: center;
    }
`

const Button = styled.div`
    margin-top: 100px;
    background-color: #3c1c9c;
    padding: 10px;
    border: 3px outset gray;

    &:hover {
        background-color: #3c1c6c;
    }
`

export const Menu = ({setIsRun}: isRun) => {

    return (
        <Tela>
            <Caixa>
                <h1>Aero Final</h1>
                <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                <Button onClick={() => setIsRun(true)}>Iniciar</Button>
            </Caixa>
        </Tela>
    )
}