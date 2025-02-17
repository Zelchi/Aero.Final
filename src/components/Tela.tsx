import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Canvas from './Canvas';
import space from '../assets/images/space.jpg';

const Caixa = styled.div<{ $largura: number; $altura: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.$largura}px;
    height: ${(props) => props.$altura}px;
    
    border: 3px outset white;
    border-top: none;
    background-image: url(${space});
    background-size: cover;
`;

export const Tela = () => {
    const [tamanhoTela, setTamanhoTela] = useState({ largura: window.innerWidth, altura: window.innerHeight });

    useEffect(() => {
        const DefineNovoTamanho = () => {
            setTamanhoTela({ largura: window.innerWidth, altura: window.innerHeight });
        };

        return () => {
            window.removeEventListener('resize', DefineNovoTamanho);
        };
    }, [window.innerHeight, window.innerWidth]);

    return (
        <Caixa $largura={tamanhoTela.largura} $altura={tamanhoTela.altura}>
            <Canvas $largura={tamanhoTela.largura - 50} $altura={tamanhoTela.altura - 50} />
        </Caixa>
    );
};