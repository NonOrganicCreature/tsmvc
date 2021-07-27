import { Bot } from "../Model/Bot";
import { BotViewModel } from "../ViewModel/BotViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityView } from "./EntityView";

class BotView extends EntityView {
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
    }

    draw(params: ViewModel) {
        const vm = <BotViewModel>params;
        this.ctx.beginPath();
        this.ctx.fillStyle = vm.color;
        this.ctx.arc(vm.position.x, vm.position.y, vm.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

export { BotView };
