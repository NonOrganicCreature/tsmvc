import { getCanvasContext } from "../pageWrapper";
import { store } from "./Store";
import { BotController } from "./Controller/BotController";
import { PlayerController } from "./Controller/PlayerController";
import { EntityController } from "./Controller/EntityController";
import { ParticleController } from "./Controller/ParticleController";
import { SpawnController } from "./Controller/SpawnController";


const c_ctx: CanvasRenderingContext2D = getCanvasContext();
const botController: EntityController = new BotController(null);
const playerController: EntityController = new PlayerController(null);
const particleController: EntityController = new ParticleController(c_ctx);
const spawnController: EntityController = new SpawnController(c_ctx);


const ENTITY_TO_GENERATE: number = 30;

const gameStart = (): void => {
    store.initializeDB(ENTITY_TO_GENERATE, getCanvasContext())
    requestAnimationFrame(main);
};

const main = (): void => {
    c_ctx.clearRect(0, 0, c_ctx.canvas.width, c_ctx.canvas.height);

    store.entities.forEach((entity) => {
        botController.entity = entity;
        botController.performAction();
    });

    particleController.performAction()
    spawnController.performAction()

    playerController.entity = store.playerEntity;
    playerController.performAction();

    requestAnimationFrame(main);
};

export { gameStart };
