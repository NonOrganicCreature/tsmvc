import { Bot } from '../Model/Bot'
import { Entity } from '../Model/Entity'
import { Player } from '../Model/Player'
import { Position } from '../Model/Position'
import { BotView } from '../View/BotView'
import { EntityView } from '../View/EntityView'
import { PlayerView } from '../View/PlayerView'

class DB {
    _entities: Array<Entity>
    _playerEntity: Entity

    constructor() {
        this._entities = []
        this._playerEntity = new Player(null)
    }

    initializeDB(entityCount: number, viewsRenderContext: CanvasRenderingContext2D): void {
        let counter: number = entityCount
        while (counter > 0) {

            const randomX: number = viewsRenderContext.canvas.width * Math.random()
            const randomY: number = viewsRenderContext.canvas.height * Math.random()
            const randomDirectionX: number = -1 + 2 * Math.random()
            const randomDirectionY: number = -1 + 2 * Math.random()
            
            const botEntity = new Bot(new Position(randomX, randomY, 0, randomDirectionX, randomDirectionY, 8))
            const botEntityView = new BotView(viewsRenderContext)
            botEntity.registerObserver(botEntityView)

            this._entities.push(botEntity)
            counter -= 1
        }

        const randomX: number = viewsRenderContext.canvas.width * Math.random()
        const randomY: number = viewsRenderContext.canvas.height * Math.random()
        const randomDirectionX: number = -1 + 2 * Math.random()
        const randomDirectionY: number = -1 + 2 * Math.random()

        this._playerEntity.position = new Position(randomX, randomY, 0, randomDirectionX, randomDirectionY, 15) 
        this._playerEntity.registerObserver(new PlayerView(viewsRenderContext))

    }

    get entities(): Array<Entity> {
        return this._entities
    }

    get playerEntity(): Entity {
        return this._playerEntity
    }

    addParticleEntity(particle: Entity, particleView: EntityView) {
        particle.registerObserver(particleView)
        this._entities.push(particle)
    }

    deleteParticle(p: Entity) {
        this._entities = this.entities.filter(particle => particle === p)
    }
}

export {
    DB
}