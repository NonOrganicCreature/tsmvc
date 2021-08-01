import { Observer } from "../Observing/Observer"
import { ViewModel } from "../ViewModel/ViewMode"

abstract class EntityView extends Observer {
    ctx: CanvasRenderingContext2D
    
    constructor(ctx: CanvasRenderingContext2D) {
        super()
        this.ctx = ctx
    }

    onNotifyCallback(params: any): void {
        this.draw(params)
    }

    abstract draw(params: ViewModel): void;
}

export {
    EntityView
}