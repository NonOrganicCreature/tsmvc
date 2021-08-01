import { Player } from "../Model/Player";
import { PlayerAttackParticle } from "../Model/PlayerAttackParticle";
import { EntityController } from "./EntityController";
import { store } from "../Store";
import { Bot } from "../Model/Bot";
import { BotDestructionParticle } from "../Model/BotDestructionParticle";
import { BotDestructionView } from "../View/BotDestructionView";
import { BotDestructionViewModel } from "../ViewModel/BotDestructionViewModel";
import { BotDestructionParticleAnimation } from "../Animation/BotDesctrutionParticleAnimation";
import { TimingFunctions } from "../Animation/TimingFunctions";

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

                if (particle instanceof BotDestructionParticle) {
                    particle.viewModel.position = particle.animation.animate(
                        particle.viewModel
                    );
                    console.log(particle.viewModel.position)
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
                            const BOT_DESTRUCTION_PARTICLE_COUNT = 7;
                            for (
                                let i = 0;
                                i < BOT_DESTRUCTION_PARTICLE_COUNT;
                                i++
                            ) {
                                const randomDirection = {
                                    ...entity.viewModel.position,
                                };
                                randomDirection.directionX =
                                    -1 + 2 * Math.random();
                                randomDirection.directionY =
                                    -1 + 2 * Math.random();
                                const botDestructionParticle =
                                    new BotDestructionParticle(
                                        new BotDestructionViewModel(
                                            5,
                                            "#fff",
                                            randomDirection
                                        )
                                    );

                                botDestructionParticle.animation =
                                    new BotDestructionParticleAnimation(
                                        performance.now() + 100,
                                        TimingFunctions.quad,
                                        30
                                    );

                                botDestructionParticle.viewModel.registerObserver(
                                    new BotDestructionView(this.ctx)
                                );

                                store.particles.push(botDestructionParticle);
                            }
                            store.entities = store.entities.filter(
                                (tEntity) => tEntity !== entity
                            );
                        }
                    }
                }
            });
        });
    }

    inputEventHandler(event: KeyboardEvent): void {}
}

export { ParticleController };
