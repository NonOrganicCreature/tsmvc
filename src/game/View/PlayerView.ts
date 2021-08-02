import { Entity } from "../Model/Entity";
import { PlayerViewModel } from "../ViewModel/PlayerViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityView } from "./EntityView";

class PlayerView extends EntityView {
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
    }

    draw(params: ViewModel): void {
        const vm = <PlayerViewModel>params;

        if (vm.position.directionY !== 0 || vm.position.directionX !== 0) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "#55f";
            this.ctx.arc(
                vm.position.x - 14 * vm.position.directionX,
                vm.position.y - 14 * vm.position.directionY,
                vm.radius - 8,
                0,
                2 * Math.PI
            );
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#66f";
            this.ctx.arc(
                vm.position.x - 12 * vm.position.directionX,
                vm.position.y - 12 * vm.position.directionY,
                vm.radius - 6,
                0,
                2 * Math.PI
            );
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#77f";
            this.ctx.arc(
                vm.position.x - 8 * vm.position.directionX,
                vm.position.y - 8 * vm.position.directionY,
                vm.radius - 4,
                0,
                2 * Math.PI
            );
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#88f";
            this.ctx.arc(
                vm.position.x - 5 * vm.position.directionX,
                vm.position.y - 5 * vm.position.directionY,
                vm.radius - 2,
                0,
                2 * Math.PI
            );
            this.ctx.fill();
        }
        this.ctx.beginPath();
        this.ctx.fillStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

export { PlayerView };
