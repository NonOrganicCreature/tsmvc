import { Entity } from "../Model/Entity";

abstract class Collider {
    constructor(entity: Entity) {
        this.entity = entity
    }
    protected entity: Entity;
    abstract collided(target: Collider): boolean;
}

export { Collider }