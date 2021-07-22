import { inputable } from "../Decorators/InputableController";
import { EntityState } from "../Enum/EntityState";
import { Entity } from "../Model/Entity";
import { Position } from "../Model/Position";
import { EntityController } from "./EntityController";

@inputable
class PlayerController extends EntityController {

    private keysPressed: any = {}

    constructor(playerEntity: Entity) {
        super(playerEntity)
    }

    performAction(): void {
        switch (this.entity.state) {
            case EntityState.Idle: {
                // binding this.entity param cause in is only one controller and this.entity changes every frame 
                this.entity.position = this.entity.position
                return
            } break;

            case EntityState.Moving: {
                const x: number = this.entity.position.x
                const y: number = this.entity.position.y
                this.entity.position = new Position(x + 1 * this.entity.position.directionX,
                    y + 1 * this.entity.position.directionY,
                    0,
                    this.entity.position.directionX,
                    this.entity.position.directionY, this.entity.position.radius)
            } break;
        }
    }

    inputEventHandler(event: any): void {
        // change direction on arrow keys pressed
        if (event.type === 'keydown') {
            this.entity.state = EntityState.Moving
            this.keysPressed[event.key] = true

            const currentPosition = new Position(this.entity.position.x, this.entity.position.y, 0, 0, 0, this.entity.position.radius)

            Object.keys(this.keysPressed).forEach(keyName => {
                if (this.keysPressed[keyName]) {
                    switch (keyName) {
                        case "ArrowUp": {
                            currentPosition.directionY = -1
                        } break;
                        case "ArrowDown": {
                            currentPosition.directionY = 1
                        } break;
                        case "ArrowLeft": {
                            currentPosition.directionX = -1
                        } break;
                        case "ArrowRight": {
                            currentPosition.directionX = 1
                        } break;
                    }
                }
            })

            this.entity.position = currentPosition
        }

        if (event.type === 'keyup') {
            this.entity.state = EntityState.Idle
            this.keysPressed[event.key] = false

            // remove direction on key up and turn to Idle
            this.entity.position = new Position(this.entity.position.x, this.entity.position.y, 0, 0, 0, this.entity.position.radius)
        }
    }

}

export {
    PlayerController
}