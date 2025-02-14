import { useState } from 'react'
import styled from 'styled-components'

const Barra = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #3c3c3c;
    color: white;
    -webkit-app-region: drag;
`

const Titulo = styled.h1`
    font-size: 16px;
`

const Caixa1 = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100px;
`

const Caixa2 = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100px;
    gap: 5px;
`

const Minimizar = styled.div<{ $minicolor: boolean }>`
    -webkit-app-region: no-drag;
    width: 20px;
    height: 20px;
    border: 2px inset black;
    cursor: pointer;
    background-color: ${({ $minicolor }) => ($minicolor ? '#7a007a' : '#4e004e')};
`

const Fechar = styled.div`
    -webkit-app-region: no-drag;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 2px inset black;
    background-color: #00026e;

    &:hover {
        cursor: pointer;
        background-color: #0e003f;
    }
`

export const BarraJanela = () => {
    const [miniColor, setMiniColor] = useState(false);

    return (
        <Barra>
            <Caixa1>
                
            </Caixa1>

            <Titulo>Batata Voadora</Titulo>

            <Caixa2>
                <Minimizar
                    onMouseMove={() => { setMiniColor(true) }}
                    onMouseOut={() => { setMiniColor(false) }}
                    onClick={() => { window.api('minimizar'); setMiniColor(false) }}
                    $minicolor={miniColor}
                />
                <Fechar onClick={() => { window.api('fechar'); }} />
            </Caixa2>
        </Barra>
    )
}