import { Position } from "../Model/Position";
import { ViewModel } from "./ViewMode";

class PlayerScoreViewModel extends ViewModel {
    _scoreValue: number
    constructor(radius: number, color: string, position: Position, scoreValue: number) {
        super(radius, color, position)
        this._radius = radius
        this._color = color
        this._position = position
        this._scoreValue = scoreValue
        this.notifyObservers(this)
    }

    get scoreValue() {
        return this._scoreValue
    }

    set scoreValue(value: number) {
        this._scoreValue = value
        this.notifyObservers(this)
    }
}

export { PlayerScoreViewModel };
