import { DB } from "./DB"

const ENTITY_TO_GENERATE: number = 30
const db: DB = new DB()

const gameStart = (): void => {
    db.initializeDB(ENTITY_TO_GENERATE)
    requestAnimationFrame(main)
}

const main = (): void => {

}

export {
    gameStart
}