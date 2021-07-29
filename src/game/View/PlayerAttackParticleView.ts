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
        this.ctx.strokeStyle = '#000';
        this.ctx.arc(
            vm.position.x,
            vm.position.y,
            vm.radius - 6 < 0 ? 0 : vm.radius - 6,
            0,
            2 * Math.PI
        );
        this.ctx.stroke()

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#001';
        this.ctx.arc(
            vm.position.x,
            vm.position.y,
            vm.radius - 5 < 0 ? 0 : vm.radius - 5,
            0,
            2 * Math.PI
        );
        this.ctx.stroke()

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#003';
        this.ctx.arc(
            vm.position.x,
            vm.position.y,
            vm.radius - 4 < 0 ? 0 : vm.radius - 4,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#005';
        this.ctx.arc(
            vm.position.x,
            vm.position.y,
            vm.radius - 3 < 0 ? 0 : vm.radius - 3,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#007';
        this.ctx.arc(
            vm.position.x,
            vm.position.y,
            vm.radius - 2 < 0 ? 0 : vm.radius - 2,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#00a';
        this.ctx.arc(
            vm.position.x,
            vm.position.y,
            vm.radius - 1 < 0 ? 0 : vm.radius - 1,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();

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
