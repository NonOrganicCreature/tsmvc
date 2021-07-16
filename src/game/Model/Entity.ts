import { EntityState } from '../Enum/EntityState'
import { Observable } from '../Observing/Observable'
import { Position } from './Position'
abstract class Entity extends Observable {
    
    private _currentTarget: Entity
    private _state: EntityState
    private _position: Position

    constructor() {
        super()
        this._currentTarget = null
        this._state = EntityState.Idle
        this._position = new Position(0, 0, 0, 0, 0)
        this.notifyObservers(this)
    }

    get state(): EntityState {
        return this._state
    }

    set state(value: EntityState) {
        this._state = value
        this.notifyObservers(this)
    }

    get currentTarget(): Entity {
        return this._currentTarget
    }

    set currentTarget(value: Entity) {
        this._currentTarget = value
        this.notifyObservers(this)
    }

    get position(): Position {
        return this._position
    }

    set position(value: Position) {
        this._position = value
        this.notifyObservers(this)
    }


}



export {
    Entity
}