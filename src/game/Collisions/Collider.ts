import { Entity } from "../Model/Entity";
import { Observer } from "../Observing/Observer";

abstract class Collider extends Observer {
    constructor(entity: Entity) {
        super()
        this.entity = entity
    }
    protected entity: Entity;
    abstract collided(target: Collider): boolean;
}

export { Collider }