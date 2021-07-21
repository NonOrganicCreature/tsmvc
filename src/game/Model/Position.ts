class Position {
    x: number
    y: number
    angle: number
    directionX: number
    directionY: number
    constructor(x: number, y: number, angle: number, directionX: number, directionY: number) {
        this.x = x
        this.y = y
        this.angle = angle
        this.directionX = directionX
        this.directionY = directionY
    }
    
}

export {
    Position
}