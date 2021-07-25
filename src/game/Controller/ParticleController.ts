import { inputable } from "../Decorators/InputableController";
import { Entity } from "../Model/Entity";
import { Player } from "../Model/Player";
import { PlayerAttackParticle } from "../Model/PlayerAttackParticle";
import { EntityController } from "./EntityController";

@inputable
class ParticleController extends EntityController {
    // store them locally
    private particles: Entity[] = [];
    nonParticleEntities: Entity[];
    private playerEntity: Entity;

    constructor(nonParticleEntities: Entity[]) {
        super(null);
        this.nonParticleEntities = nonParticleEntities;
        this.playerEntity = this.nonParticleEntities.filter(
            entity => entity instanceof Player
        )[0];
    }

    performAction(): void {
        // transform particles
        this.particles.forEach((particle) => {
            if (particle instanceof PlayerAttackParticle) {
                particle.position = this.playerEntity.position
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

    inputEventHandler(event: InputEvent): void {
        throw new Error("Method not implemented.");
    }
}

export { ParticleController };
