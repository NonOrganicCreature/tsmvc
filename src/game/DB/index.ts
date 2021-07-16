import { Bot } from '../Model/Bot'
import { Entity } from '../Model/Entity'
import { BotView } from '../View/BotView'

class DB {
    _entities: Array<Entity>

    constructor() {
        this._entities = []
    }

    initializeDB(entityCount: number, viewsRenderContext: CanvasRenderingContext2D): void {
        let counter: number = entityCount
        while (counter > 0) {

            const botEntity = new Bot()
            const botEntityView = new BotView(viewsRenderContext)
            botEntity.registerObserver(botEntityView)

            this._entities.push(new Bot())
            counter -= 1
        }
    }

    get entities(): Array<Entity> {
        return this._entities
    }
}

export {
    DB
}