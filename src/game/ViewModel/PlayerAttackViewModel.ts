import { Position } from "../Model/Position";
import { ViewModel } from "./ViewMode";

class PlayerAttackViewModel extends ViewModel {
    constructor(radius: number, color: string, position: Position) {
        super(radius, color, position)
        this._radius = radius
        this._color = color
        this._position = position
        this.notifyObservers(this)
    }
}

export { PlayerAttackViewModel };
