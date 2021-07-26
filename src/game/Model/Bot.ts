import { CircleCollider } from "../Collisions/CircleCollider";
import { Entity } from "./Entity";
import { Position } from "./Position";
import { Stats } from "./Stats";

class Bot extends Entity {

    private _stats: Stats

    constructor(position: Position) {
        super()
        this._stats = new Stats(2, 100)
        this.position = position
        this.collider = new CircleCollider(this, this.position.radius)
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
    Bot
}