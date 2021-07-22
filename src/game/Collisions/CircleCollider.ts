import { distanceBetween } from "../Utils"
import { Collider } from "./Collider"

class CircleCollider extends Collider {

    private radius: number = 0

    constructor(radius: number) {
        super()
        this.radius = radius
    }

    collided(target: Collider): boolean {
        if (target instanceof CircleCollider) {
            return distanceBetween(this.entity.position, target.entity.position) === target.radius + this.radius
        }
        return false
    }

}

export { CircleCollider }