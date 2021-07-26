import { PlayerAttackAnimation } from "../Animation/PlayerAttackAnimation";
import { TimingFunctions } from "../Animation/TimingFunctions";
import { inputable } from "../Decorators/InputableController";
import { Entity } from "../Model/Entity";
import { PlayerAttackParticle } from "../Model/PlayerAttackParticle";
import { PlayerAttackParticleView } from "../View/PlayerAttackParticleView";
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
                particle.position = particle.animation.animate(
                    particle.position
                );

                if (particle.animation.progress() >= 1) {
                    particle.animation = null;
                }
            }
            if (particle instanceof PlayerAttackParticle) {
                particle.position = {
                    ...particle.position,
                    x: this.playerEntity.position.x,
                    y: this.playerEntity.position.y,
                };
            }
        });

        // check collisions
        this.particles.forEach((particle) => {
            this.nonParticleEntities.forEach((entity) => {
                if (particle.collider.collided(entity.collider)) {
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
                        const playerAttackParticle = new PlayerAttackParticle({
                            ...this.playerEntity.position,
                        });
                        playerAttackParticle.animation =
                            new PlayerAttackAnimation(
                                performance.now() + 500,
                                TimingFunctions.quad,
                                2
                            );
                        playerAttackParticle.registerObserver(
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
