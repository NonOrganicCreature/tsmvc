import { DB } from "./DB"
import { getCanvasContext } from "../pageWrapper"
import { BotController } from "./Controller/BotController"
import { EntityController } from "./Controller/EntityController"
import { EntityState } from "./Enum/EntityState"

const ENTITY_TO_GENERATE: number = 30

const db: DB = new DB()

const botController: EntityController = new BotController(null)

const c_ctx: CanvasRenderingContext2D = getCanvasContext()

const gameStart = (): void => {
    db.initializeDB(ENTITY_TO_GENERATE, c_ctx)
    requestAnimationFrame(main)
}

let last = performance.now()
const main = (): void => {
    c_ctx.clearRect(0, 0, c_ctx.canvas.width, c_ctx.canvas.height)

    db.entities.forEach(entity => {
        botController.entity = entity
        botController.performAction()
    });

    requestAnimationFrame(main)
}

export {
    gameStart
}