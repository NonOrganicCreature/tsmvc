import { Entity } from "../Model/Entity";
import { EntityView } from "./EntityView";

class PlayerView extends EntityView {
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx)
    }

    draw(params: Entity): void {
        this.ctx.beginPath()
        this.ctx.fillStyle = "#00f"
        this.ctx.arc(params.position.x, params.position.y, params.position.radius, 0, 2 * Math.PI)
        this.ctx.fill()
    }
}

export { PlayerView }