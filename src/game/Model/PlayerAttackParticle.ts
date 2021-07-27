import { EntityAnimation } from "../Animation/Animation";
import { CircleCollider } from "../Collisions/CircleCollider";
import { ViewModel } from "../ViewModel/ViewMode";
import { Particle } from "./Particle";
import { Position } from "./Position";

class PlayerAttackParticle extends Particle {
    constructor(viewModel: ViewModel) {
        super(viewModel)
        this.collider = new CircleCollider(this, this.viewModel.radius)
    }
}

export { PlayerAttackParticle }