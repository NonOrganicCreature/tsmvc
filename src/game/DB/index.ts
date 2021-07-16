import { Bot } from '../Model/Bot'
import { Entity } from '../Model/Entity'
import { Position } from '../Model/Position'
import { BotView } from '../View/BotView'

class DB {
    _entities: Array<Entity>

    constructor() {
        this._entities = []
    }

    initializeDB(entityCount: number, viewsRenderContext: CanvasRenderingContext2D): void {
        let counter: number = entityCount
        while (counter > 0) {

            const randomX: number = viewsRenderContext.canvas.width * Math.random()
            const randomY: number = viewsRenderContext.canvas.height * Math.random()
            const randomDirectionX: number = -1 + 2 * Math.random()
            const randomDirectionY: number = -1 + 2 * Math.random()
            
            const botEntity = new Bot(new Position(randomX, randomY, 0, randomDirectionX, randomDirectionY))
            const botEntityView = new BotView(viewsRenderContext)
            botEntity.registerObserver(botEntityView)

            this._entities.push(botEntity)
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