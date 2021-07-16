import { Entity } from "./Entity";
import { Stats } from "./Stats";

class Bot extends Entity {

    private _stats: Stats

    constructor() {
        super()
        this._stats = new Stats(2, 100)
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