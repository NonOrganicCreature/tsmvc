import { Entity } from "../Model/Entity";
import { EntityView } from "./EntityView";

class PlayerAttackParticleView extends EntityView {

    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx)
    }

    draw(params: Entity): void {
        throw new Error("Method not implemented.");
    }
}

export { PlayerAttackParticleView }