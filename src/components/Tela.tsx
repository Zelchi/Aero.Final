import styled from 'styled-components'
import Canvas from './Canvas'


const Caixa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3%;
    height: 600px;
    width: 600px;
`

export const Tela = () => {
    return (
        <Caixa>
            <Canvas />
        </Caixa>
    )
}