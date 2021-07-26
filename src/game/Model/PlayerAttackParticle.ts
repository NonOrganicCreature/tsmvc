import { EntityAnimation } from "../Animation/Animation";
import { CircleCollider } from "../Collisions/CircleCollider";
import { Particle } from "./Particle";
import { Position } from "./Position";

class PlayerAttackParticle extends Particle {
    constructor(position: Position) {
        super()
        this.position = position
        this.collider = new CircleCollider(this, this.position.radius)
    }
}

export { PlayerAttackParticle }