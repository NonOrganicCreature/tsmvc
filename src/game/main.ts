import { DB } from "./DB"
import { getCanvasContext } from "../pageWrapper"
import { BotController } from "./Controller/BotController"
import { EntityController } from "./Controller/EntityController"

const ENTITY_TO_GENERATE: number = 30
let CURRENT_ENTITY_TO_PROCESS: number = 0

const db: DB = new DB()

const botController: EntityController = new BotController(null)

const gameStart = (): void => {
    db.initializeDB(ENTITY_TO_GENERATE, getCanvasContext())
    requestAnimationFrame(main)
}

const main = (): void => {
    
    botController.entity = db.entities[CURRENT_ENTITY_TO_PROCESS]
    botController.performAction()

    CURRENT_ENTITY_TO_PROCESS += 1

    if (CURRENT_ENTITY_TO_PROCESS >= ENTITY_TO_GENERATE) {
        CURRENT_ENTITY_TO_PROCESS = 0
    }

    console.log(CURRENT_ENTITY_TO_PROCESS)

    requestAnimationFrame(main)
}

export {
    gameStart
}