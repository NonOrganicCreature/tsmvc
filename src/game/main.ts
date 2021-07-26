import { DB } from "./DB";
import { getCanvasContext } from "../pageWrapper";
import { BotController } from "./Controller/BotController";
import { PlayerController } from "./Controller/PlayerController";
import { EntityController } from "./Controller/EntityController";
import { EntityState } from "./Enum/EntityState";
import { ParticleController } from "./Controller/ParticleController";

const ENTITY_TO_GENERATE: number = 30;

const db: DB = new DB();

const c_ctx: CanvasRenderingContext2D = getCanvasContext();
const botController: EntityController = new BotController(null);
const playerController: EntityController = new PlayerController(null);
const particleController: EntityController = new ParticleController(null, c_ctx);


const gameStart = (): void => {
    db.initializeDB(ENTITY_TO_GENERATE, c_ctx);
    requestAnimationFrame(main);
};

const main = (): void => {
    c_ctx.clearRect(0, 0, c_ctx.canvas.width, c_ctx.canvas.height);

    db.entities.forEach((entity) => {
        botController.entity = entity;
        botController.performAction();
    });

    const pc = (particleController as ParticleController)
    pc.nonParticleEntities = [
        ...db.entities,
    ];
    pc.playerEntity = db.playerEntity
    pc.performAction()
    

    playerController.entity = db.playerEntity;
    playerController.performAction();

    requestAnimationFrame(main);
};

export { gameStart };
