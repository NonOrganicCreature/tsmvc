class Position {
    x: number
    y: number
    angle: number
    directionX: number
    directionY: number
    radius: number
    constructor(x: number, y: number, angle: number, directionX: number, directionY: number, radius: number) {
        this.x = x
        this.y = y
        this.angle = angle
        this.directionX = directionX
        this.directionY = directionY
        this.radius = radius
    }
    
}

export {
    Position
}