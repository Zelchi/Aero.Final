import { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Tela = styled.canvas`
    height: 100%;
    width: 100%;
    border: 2px solid white;
`

const Canvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        if (!context) return
        context.fillStyle = '#7c7474'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return (
        <Tela ref={canvasRef} />
    )
}

export default Canvas