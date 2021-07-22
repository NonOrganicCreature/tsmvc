import { Bot } from "../Model/Bot";
import { EntityView } from "./EntityView";

class BotView extends EntityView {
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx)
    }

    draw(params: Bot) {
        this.ctx.beginPath()
        this.ctx.fillStyle = "#fff"
        this.ctx.arc(params.position.x, params.position.y, params.position.radius, 0, 2 * Math.PI)
        this.ctx.fill()
    }
}

export { BotView }