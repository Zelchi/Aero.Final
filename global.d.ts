interface Window {
    api: render;
}

type Canvas = {
    $largura: number,
    $altura: number,
    setIsRun: (bool: boolean) => void,
}

type Aim = {
    pageX: number,
    pageY: number,
}

type TamanhoTela = {
    largura: number,
    altura: number,
}

type isRun = {
    isRun: boolean,
    setIsRun: (bool: boolean) => void,
}