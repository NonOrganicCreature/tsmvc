import { Position } from "../Model/Position";

export const distanceBetween = (p1: Position, p2: Position): number => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p2.y - p2.y, 2))
}