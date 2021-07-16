import { Entity } from '../Model/Entity'
abstract class EntityController {
    _entity: Entity

    constructor(e: Entity) {
        this._entity = e
    }

    get entity(): Entity {
        return this._entity
    }

    abstract performAction(): void;
}

export { EntityController }