import { EntityState } from "../Enum/EntityState";
import { Entity } from "../Model/Entity";
import { EntityController } from "./EntityController";

class BotController extends EntityController {

    constructor(botEntity: Entity) {
        super(botEntity)
    }

    performAction(): void {
        if (this.entity.state === EntityState.Idle) {
            this.entity.notifyObservers(this.entity)
            return
        }
    }
}

export { BotController }