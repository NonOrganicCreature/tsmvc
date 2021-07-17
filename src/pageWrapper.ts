const c_context: CanvasRenderingContext2D = (document.getElementById('c_game') as HTMLCanvasElement).getContext('2d')
const initCanvas = (): void => {
    c_context.canvas.width = window.innerWidth
    c_context.canvas.height = window.innerHeight
    c_context.canvas.style.backgroundColor = "#000"
}
const getCanvasContext = (): CanvasRenderingContext2D => {
    return c_context
}


const resetPageStyles = (): void => {
    document.body.style.padding = '0'
    document.body.style.margin = '0'
    document.body.style.height = '100vh'
    document.body.style.width = '100vw'
    c_context.canvas.style.width = '100%'
    c_context.canvas.style.height = '100%'
}
export {
    initCanvas,
    getCanvasContext,
    resetPageStyles
}