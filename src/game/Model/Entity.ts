import { EntityAnimation } from '../Animation/Animation'
import { Collider } from '../Collisions/Collider'
import { EntityState } from '../Enum/EntityState'
import { ViewModel } from '../ViewModel/ViewMode'
abstract class Entity {
    
    private _currentTarget: Entity
    private _state: EntityState
    private _collider: Collider
    private _animation: EntityAnimation
    private _viewModel: ViewModel
    
    constructor(viewModel: ViewModel) {
        this._currentTarget = null
        this._state = EntityState.Idle
        this._viewModel = viewModel
    }

    get state(): EntityState {
        return this._state
    }

    set state(value: EntityState) {
        this._state = value
    }

    get currentTarget(): Entity {
        return this._currentTarget
    }

    set currentTarget(value: Entity) {
        this._currentTarget = value
    }

    get collider(): Collider {
        return this._collider
    }

    set collider(value: Collider) {
        this._collider = value
    }

    get animation(): EntityAnimation {
        return this._animation
    }

    set animation(value: EntityAnimation) {
        this._animation = value
    }

    get viewModel(): ViewModel {
        return this._viewModel
    }

    set viewModel(value: ViewModel) {
        this._viewModel = value
    }

}



export {
    Entity
}