import { Entity } from "../Model/Entity"
import { Observer } from "../Observing/Observer"

abstract class EntityView extends Observer {
    ctx: CanvasRenderingContext2D

    constructor(ctx: CanvasRenderingContext2D) {
        super()
        this.ctx = ctx
    }

    onNotifyCallback(params: any): void {
        this.draw(params)
    }

    abstract draw(params: Entity): void;
}

export {
    EntityView
}