import { Player } from "../Model/Player";
import { PlayerAttackParticle } from "../Model/PlayerAttackParticle";
import { EntityController } from "./EntityController";
import { store } from "../Store";
import { Bot } from "../Model/Bot";

class ParticleController extends EntityController {
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D) {
        super(null);
        this.ctx = ctx;
    }

    performAction(): void {
        // delete expired particles
        store.particles = store.particles.filter(
            (particle) => !!particle.animation
        );

        // transform particles
        store.particles.forEach((particle) => {
            if (particle.animation) {
                if (particle instanceof PlayerAttackParticle) {
                    particle.viewModel.radius = particle.animation.animate(
                        particle.viewModel
                    );
                }

                if (particle.animation.progress() >= 1) {
                    particle.animation = null;
                }
            }

        });

        // check collisions
        store.particles.forEach((particle) => {
            store.entities.forEach((entity) => {
                if (particle.collider.collided(entity.collider)) {
                    if (particle instanceof PlayerAttackParticle) {
                        if (entity instanceof Player) {
                            return;
                        }
                        if (entity instanceof Bot) {
                            entity.viewModel.color = "#f00";
                        }
                    }
                }
            });
        });
    }

    inputEventHandler(event: KeyboardEvent): void {}
}

export { ParticleController };
