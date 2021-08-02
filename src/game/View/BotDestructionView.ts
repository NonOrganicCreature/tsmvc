import { BotDestructionViewModel } from "../ViewModel/BotDestructionViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityView } from "./EntityView";

class BotDestructionView extends EntityView {
    
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx)
    }

    draw(params: ViewModel): void {
        const vm = (<BotDestructionViewModel>params)
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.translate(vm.position.x, vm.position.y)
        this.ctx.rotate(vm.angle)
        this.ctx.fillStyle = vm.color
        this.ctx.globalAlpha = vm.opacity
        this.ctx.moveTo(0, 0 - vm.radius)
        this.ctx.lineTo(0 + vm.radius, 0  - vm.radius / 2)
        this.ctx.lineTo(0 - vm.radius / 2, 0  + vm.radius)
        this.ctx.lineTo(0 - vm.radius, 0 - vm.radius / 6)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.restore()
    }
}

export { BotDestructionView }