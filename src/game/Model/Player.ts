import { CircleCollider } from "../Collisions/CircleCollider";
import { ViewModel } from "../ViewModel/ViewMode";
import { Entity } from "./Entity";
import { Position } from "./Position";
import { Stats } from "./Stats";

class Player extends Entity {
    private _stats: Stats

    constructor(viewModel: ViewModel) {
        super(viewModel)
        this._stats = new Stats(2, 100)
        this.collider = new CircleCollider(this, 0)
    }

    get stats(): Stats {
        return this._stats
    }

    set stats(value: Stats) {
        this._stats = value
    }
}

export {
    Player
}