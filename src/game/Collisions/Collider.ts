import { Entity } from "../Model/Entity";

abstract class Collider {
    protected entity: Entity;
    abstract collided(target: Collider): boolean;
}

export { Collider }