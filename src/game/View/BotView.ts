import { Bot } from "../Model/Bot";
import { EntityView } from "./EntityView";

class BotView extends EntityView {
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx)
    }

    draw(params: Bot) {

    }
}

export { BotView }