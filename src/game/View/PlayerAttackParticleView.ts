import { Entity } from "../Model/Entity";
import { PlayerAttackViewModel } from "../ViewModel/PlayerAttackViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityView } from "./EntityView";

class PlayerAttackParticleView extends EntityView {
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
    }

    draw(params: ViewModel): void {
        const vm = (<PlayerAttackViewModel>params)
        this.ctx.beginPath();
        this.ctx.strokeStyle = vm.color;
        this.ctx.arc(
            vm.position.x,
            vm.position.y,
            vm.radius,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();
    }
}

export { PlayerAttackParticleView };
