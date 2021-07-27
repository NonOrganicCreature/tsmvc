import { PlayerAttackAnimation } from "../Animation/PlayerAttackAnimation";
import { TimingFunctions } from "../Animation/TimingFunctions";
import { inputable } from "../Decorators/InputableController";
import { Entity } from "../Model/Entity";
import { Player } from "../Model/Player";
import { PlayerAttackParticle } from "../Model/PlayerAttackParticle";
import { PlayerAttackParticleView } from "../View/PlayerAttackParticleView";
import { PlayerAttackViewModel } from "../ViewModel/PlayerAttackViewModel";
import { EntityController } from "./EntityController";

@inputable
class ParticleController extends EntityController {
    // store them locally
    private particles: Entity[] = [];
    nonParticleEntities: Entity[];
    playerEntity: Entity;
    ctx: CanvasRenderingContext2D;
    constructor(nonParticleEntities: Entity[], ctx: CanvasRenderingContext2D) {
        super(null);
        this.nonParticleEntities = nonParticleEntities;
        this.ctx = ctx;
    }

    performAction(): void {
        // delete expired particles
        this.particles = this.particles.filter(
            (particle) => !!particle.animation
        );

        // transform particles
        this.particles.forEach((particle) => {
            if (particle.animation) {
                particle.viewModel.radius = particle.animation.animate(
                    particle.viewModel
                );

                if (particle.animation.progress() >= 1) {
                    particle.animation = null;
                }
            }
            if (particle instanceof PlayerAttackParticle) {
                particle.viewModel.position = {
                    ...particle.viewModel.position,
                    x: this.playerEntity.viewModel.position.x,
                    y: this.playerEntity.viewModel.position.y,
                };
            }
        });

        // check collisions
        this.particles.forEach((particle) => {
            this.nonParticleEntities.forEach((entity) => {
                if (particle.collider.collided(entity.collider)) {
                    if (particle instanceof PlayerAttackParticle) {
                        if (entity instanceof Player) {
                            return;
                        }

                        // this.nonParticleEntities = this.nonParticleEntities.filter(e => e === entity)
                        console.log(this.nonParticleEntities.length);
                    }
                }
            });
        });
    }

    inputEventHandler(event: KeyboardEvent): void {
        if (event.type === "keydown") {
            switch (event.key) {
                case " ":
                    {
                        if (
                            this.particles.filter(
                                (particle) =>
                                    particle instanceof PlayerAttackParticle
                            )[0]
                        ) {
                            return;
                        }
                        const playerAttackParticle = new PlayerAttackParticle(
                            new PlayerAttackViewModel(10, "#00f", {
                                ...this.playerEntity.viewModel.position,
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
                            new PlayerAttackParticleView(this.ctx)
                        );
                        this.particles.push(playerAttackParticle);
                    }
                    break;
            }
        }
    }
}

export { ParticleController };
