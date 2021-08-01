import { CircleCollider } from "../Collisions/CircleCollider";
import { ViewModel } from "../ViewModel/ViewMode";
import { Particle } from "./Particle";

class BotDestructionParticle extends Particle {
    constructor(viewModel: ViewModel) {
        super(viewModel)
        this.collider = new CircleCollider(this, this.viewModel.radius)
    }
}

export { BotDestructionParticle }