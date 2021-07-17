import { inputable } from "../Decorators/InputableController";
import { EntityState } from "../Enum/EntityState";
import { Entity } from "../Model/Entity";
import { Position } from "../Model/Position";
import { EntityController } from "./EntityController";

@inputable
class PlayerController extends EntityController {

    constructor(playerEntity: Entity) {
        super(playerEntity)
    }

    performAction(): void {
        switch (this.entity.state) {
            case EntityState.Idle: {
                // binding this.entity param cause in is only one controller and this.entity changes every frame 
                setTimeout(((entity: Entity) => {
                    entity.state = EntityState.Moving
                }).bind(this, this.entity), 1000)
                return
            } break;

            case EntityState.Moving: {
                const x: number = this.entity.position.x
                const y: number = this.entity.position.y
                this.entity.position = new Position(x + 1 * this.entity.position.directionX,
                    y + 1 * this.entity.position.directionY,
                    0,
                    this.entity.position.directionX,
                    this.entity.position.directionY)
            } break;
        }
    }

    inputEventHandler(event: InputEvent): void {
        // TODO: change direction on keydown event and state => Moving, keyup => Idle
    }

}

export {
    PlayerController
}