import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Canvas from './Canvas';
import space from '../../assets/images/space.jpg';

const Caixa = styled.div<{ $largura: number; $altura: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.$largura}px;
    height: ${(props) => props.$altura}px;
    
    background-image: url(${space});
    background-size: cover;
    border: 10px solid #1c1c1c;
    border-top: 5px solid #1c1c1c;
`;

export const Tela = () => {
    const [tamanhoTela, setTamanhoTela] = useState({ largura: window.innerWidth, altura: window.innerHeight });

    useEffect(() => {
        return setTamanhoTela({ largura: window.innerWidth, altura: window.innerHeight });
    }, [window.innerHeight, window.innerWidth]);

    return (
        <Caixa $largura={tamanhoTela.largura} $altura={tamanhoTela.altura}>
            <Canvas $largura={tamanhoTela.largura - 100} $altura={tamanhoTela.altura - 100} />
        </Caixa>
    );
};