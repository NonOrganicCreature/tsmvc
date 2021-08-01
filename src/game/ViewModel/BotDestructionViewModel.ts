import { Position } from "../Model/Position";
import { ViewModel } from "./ViewMode";

class BotDestructionViewModel extends ViewModel {
    private _angle = 0
    constructor(radius: number, color: string, position: Position) {
        super(radius, color, position)
        this._radius = radius
        this._color = color
        this._position = position
        this._angle = Math.random() * 2 * Math.PI
        this.notifyObservers(this)
    }

    get angle() {
        return this._angle
    }
}

export { BotDestructionViewModel };