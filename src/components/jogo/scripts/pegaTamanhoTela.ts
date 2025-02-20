const canvas = document.querySelector("canvas") as HTMLCanvasElement;

export const pegaTamanhoTela = () => {
    return {
        largura: canvas?.width,
        altura: canvas?.height
    };
}