import { Entity } from "../Model/Entity"
import { distanceBetween } from "../Utils"
import { ViewModel } from "../ViewModel/ViewMode"
import { Collider } from "./Collider"

class CircleCollider extends Collider {

    private radius: number = 0

    constructor(entity: Entity, radius: number) {
        super(entity)
        this.radius = radius
        this.entity.viewModel.registerObserver(this)
    }

    collided(target: Collider): boolean {
        if (target instanceof CircleCollider) {
            return distanceBetween(this.entity.viewModel.position, target.entity.viewModel.position) <= (target.radius + this.radius)
        }
        return false
    }

    onNotifyCallback(params: ViewModel): void {
        this.radius = params.radius
    }

}

export { CircleCollider }