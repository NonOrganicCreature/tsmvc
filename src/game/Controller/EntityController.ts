import { Entity } from '../Model/Entity'
abstract class EntityController {
    private _entity: Entity

    constructor(e: Entity) {
        this._entity = e
    }

    get entity(): Entity {
        return this._entity
    }

    set entity(value: Entity) {
        this._entity = value
    }

    abstract performAction(): void;
    abstract inputEventHandler(event: InputEvent): void;
}

export { EntityController }