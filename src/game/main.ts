import { DB } from "./DB"
import { getCanvasContext } from "../pageWrapper"
import { BotController } from "./Controller/BotController"
import { EntityController } from "./Controller/EntityController"

const ENTITY_TO_GENERATE: number = 30
const db: DB = new DB()

const botController: EntityController = new BotController(null)

const gameStart = (): void => {
    db.initializeDB(ENTITY_TO_GENERATE, getCanvasContext())
    requestAnimationFrame(main)
}

const main = (): void => {
    let currentEntityToProcess: number = 0
    
}

export {
    gameStart
}