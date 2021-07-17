import { Entity } from "./Entity";
import { Position } from "./Position";
import { Stats } from "./Stats";

class Player extends Entity {
    private _stats: Stats

    constructor(position: Position) {
        super()
        this._stats = new Stats(2, 100)
        this.position = position
    }

    get stats(): Stats {
        return this._stats
    }

    set stats(value: Stats) {
        this._stats = value
        this.notifyObservers(this)
    }
}

export {
    Player
}