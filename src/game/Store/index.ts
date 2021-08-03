import { CircleCollider } from '../Collisions/CircleCollider'
import { Bot } from '../Model/Bot'
import { Entity } from '../Model/Entity'
import { Player } from '../Model/Player'
import { Position } from '../Model/Position'
import { Score } from '../Model/Score'
import { BotView } from '../View/BotView'
import { EntityView } from '../View/EntityView'
import { PlayerScoreView } from '../View/PlayerScoreView'
import { PlayerView } from '../View/PlayerView'
import { BotViewModel } from '../ViewModel/BotViewModel'
import { PlayerScoreViewModel } from '../ViewModel/PlayerScoreViewModel'
import { PlayerViewModel } from '../ViewModel/PlayerViewModel'

class Store {
    _entities: Array<Entity>
    _playerEntity: Entity
    _particles: Entity[]

    constructor() {
        this._entities = []
        this._particles = []
        this._playerEntity = new Player(new PlayerViewModel(12, "#00f", new Position(0, 0, 0, 0)))
    }

    initializeDB(entityCount: number, viewsRenderContext: CanvasRenderingContext2D): void {
        let counter: number = entityCount
        while (counter > 0) {

            const randomX: number = viewsRenderContext.canvas.width * Math.random()
            const randomY: number = viewsRenderContext.canvas.height * Math.random()
            const randomDirectionX: number = -1 + 2 * Math.random()
            const randomDirectionY: number = -1 + 2 * Math.random()
            
            const botEntity = new Bot(new BotViewModel(10, '#fff', new Position(randomX, randomY, randomDirectionX, randomDirectionY)))
            botEntity.collider = new CircleCollider(botEntity, botEntity.viewModel.radius)
            const botEntityView = new BotView(viewsRenderContext)
            botEntity.viewModel.registerObserver(botEntityView)

            this._entities.push(botEntity)
            counter -= 1
        }

        const scoreEntity = new Score(new PlayerScoreViewModel(10, "#f00", new Position(100, 100, 0, 0), 0));
        const scoreView = new PlayerScoreView(viewsRenderContext)
        scoreEntity.viewModel.registerObserver(scoreView)
        
        this._entities.push(scoreEntity)
        const randomX: number = viewsRenderContext.canvas.width * Math.random()
        const randomY: number = viewsRenderContext.canvas.height * Math.random()
        const randomDirectionX: number = -1 + 2 * Math.random()
        const randomDirectionY: number = -1 + 2 * Math.random()

        this._playerEntity.viewModel.position = new Position(randomX, randomY, randomDirectionX, randomDirectionY) 
        this._playerEntity.collider = new CircleCollider(this._playerEntity, this._playerEntity.viewModel.radius)
        this._playerEntity.viewModel.registerObserver(new PlayerView(viewsRenderContext))

    }

    get entities(): Array<Entity> {
        return this._entities
    }

    set entities(value: Entity[]) {
        this._entities = value
    }

    get playerEntity(): Entity {
        return this._playerEntity
    }

    get particles(): Entity[] {
        return this._particles
    }

    set particles(value: Entity[]) {
        this._particles = value
    }

    addParticleEntity(particle: Entity, particleView: EntityView) {
        // particle.registerObserver(particleView)
        this._entities.push(particle)
    }

    deleteParticle(p: Entity) {
        this._entities = this.entities.filter(particle => particle === p)
    }
}



const store: Store = new Store();


export {
    store
}