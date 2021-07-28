import { inputable } from "../Decorators/InputableController";
import { EntityState } from "../Enum/EntityState";
import { Entity } from "../Model/Entity";
import { Position } from "../Model/Position";
import { EntityController } from "./EntityController";
import { store } from "../Store";
import { PlayerAttackParticle } from "../Model/PlayerAttackParticle";
import { PlayerAttackAnimation } from "../Animation/PlayerAttackAnimation";
import { TimingFunctions } from "../Animation/TimingFunctions";
import { PlayerAttackParticleView } from "../View/PlayerAttackParticleView";
import { PlayerAttackViewModel } from "../ViewModel/PlayerAttackViewModel";
import { getCanvasContext } from "../../pageWrapper";
@inputable
class PlayerController extends EntityController {
    private keysPressed: any = {};

    constructor(playerEntity: Entity) {
        super(playerEntity);
    }

    performAction(): void {
        switch (this.entity.state) {
            case EntityState.Idle:
                {
                    // binding this.entity param cause in is only one controller and this.entity changes every frame
                    this.entity.viewModel.position = this.entity.viewModel.position;
                    return;
                }
                break;

            case EntityState.Moving:
                {
                    const x: number = this.entity.viewModel.position.x;
                    const y: number = this.entity.viewModel.position.y;
                    const dX = this.entity.viewModel.position.directionX;
                    const dY = this.entity.viewModel.position.directionY;
                    this.entity.viewModel.position = {
                        ...this.entity.viewModel.position,
                        x: x + 5 * dX,
                        y: y + 5 * dY,
                    };
                }
                break;
        }
    }

    inputEventHandler(event: KeyboardEvent): void {
        // change direction on arrow keys pressed
        if (event.type === "keydown") {
            this.entity.state = EntityState.Moving;
            this.keysPressed[event.key] = true;
        }

        if (event.type === "keyup" && event.key !== " ") {
            this.entity.state = EntityState.Idle;
            this.keysPressed[event.key] = false;

            // remove direction on key up and turn to Idle
            this.entity.viewModel.position = new Position(
                this.entity.viewModel.position.x,
                this.entity.viewModel.position.y,
                0,
                0,
            );
        }
        const currentPosition = new Position(
            this.entity.viewModel.position.x,
            this.entity.viewModel.position.y,
            0,
            0
        );

        Object.keys(this.keysPressed).forEach((keyName) => {
            if (this.keysPressed[keyName]) {
                switch (keyName) {
                    case "ArrowUp":
                        {
                            currentPosition.directionY = -1;
                        }
                        break;
                    case "ArrowDown":
                        {
                            currentPosition.directionY = 1;
                        }
                        break;
                    case "ArrowLeft":
                        {
                            currentPosition.directionX = -1;
                        }
                        break;
                    case "ArrowRight":
                        {
                            currentPosition.directionX = 1;
                        }
                        break;

                        case " ":
                    {
                        if (
                            store.particles.filter(
                                (particle) =>
                                    particle instanceof PlayerAttackParticle
                            )[0]
                        ) {
                            return;
                        }
                        const playerAttackParticle = new PlayerAttackParticle(
                            new PlayerAttackViewModel(10, "#00f", {
                                ...store.playerEntity.viewModel.position,
                            })
                        );
                        debugger
                        playerAttackParticle.animation =
                            new PlayerAttackAnimation(
                                performance.now() + 1000,
                                TimingFunctions.quad,
                                2
                            );
                        playerAttackParticle.viewModel.registerObserver(
                            new PlayerAttackParticleView(getCanvasContext())
                        );
                        store.particles.push(playerAttackParticle);
                    }
                    break;
                }
            }
        });

        this.entity.viewModel.position = currentPosition;
    }
}

export { PlayerController };
