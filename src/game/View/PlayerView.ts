import { Entity } from "../Model/Entity";
import { PlayerViewModel } from "../ViewModel/PlayerViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityView } from "./EntityView";

class PlayerView extends EntityView {
    
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx)
    }

    draw(params: ViewModel): void {
        const vm = (<PlayerViewModel>params)
        this.ctx.beginPath()
        this.ctx.fillStyle = vm.color
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI)
        this.ctx.fill()
    }
}

export { PlayerView }