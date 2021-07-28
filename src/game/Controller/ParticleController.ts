import { PlayerAttackAnimation } from "../Animation/PlayerAttackAnimation";
import { TimingFunctions } from "../Animation/TimingFunctions";
import { inputable } from "../Decorators/InputableController";
import { Entity } from "../Model/Entity";
import { Player } from "../Model/Player";
import { PlayerAttackParticle } from "../Model/PlayerAttackParticle";
import { PlayerAttackParticleView } from "../View/PlayerAttackParticleView";
import { PlayerAttackViewModel } from "../ViewModel/PlayerAttackViewModel";
import { EntityController } from "./EntityController";
import { store } from "../Store";
@inputable
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
                    x: store.playerEntity.viewModel.position.x,
                    y: store.playerEntity.viewModel.position.y,
                };
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
                    }
                }
            });
        });
    }

    inputEventHandler(event: KeyboardEvent): void {
        if (event.type === "keydown") {
            switch (event.key) {
                
            }
        }
    }
}

export { ParticleController };
