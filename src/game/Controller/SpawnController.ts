import { EntityController } from "./EntityController";
import { store } from "../Store";
import { Bot } from "../Model/Bot";
import { BotView } from "../View/BotView";
import { CircleCollider } from "../Collisions/CircleCollider";
import { BotViewModel } from "../ViewModel/BotViewModel";
import { Position } from "../Model/Position";

class SpawnController extends EntityController {
    ctx: CanvasRenderingContext2D;
    private lastSpawnTime: number = 0
    constructor(ctx: CanvasRenderingContext2D) {
        super(null);
        this.ctx = ctx;
    }

    performAction(): void {
        if (this.lastSpawnTime === 0) {
            this.lastSpawnTime = performance.now()
        }

        const currentTime = performance.now()
        if (currentTime - this.lastSpawnTime >= 200) {
            const randomX: number = this.ctx.canvas.width * Math.random()
            const randomY: number = this.ctx.canvas.height * Math.random()
            const randomDirectionX: number = -1 + 2 * Math.random()
            const randomDirectionY: number = -1 + 2 * Math.random()
            
            const botEntity = new Bot(new BotViewModel(10, '#fff', new Position(randomX, randomY, randomDirectionX, randomDirectionY)))
            botEntity.collider = new CircleCollider(botEntity, botEntity.viewModel.radius)
            const botEntityView = new BotView(this.ctx)
            botEntity.viewModel.registerObserver(botEntityView)

            store.entities.push(botEntity)
            this.lastSpawnTime = currentTime
        }
    }

    inputEventHandler(event: KeyboardEvent): void {}
}

export { SpawnController };
