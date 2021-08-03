import { CircleCollider } from "../Collisions/CircleCollider";
import { ViewModel } from "../ViewModel/ViewMode";
import { Entity } from "./Entity";

class Score extends Entity {

    constructor(viewModel: ViewModel) {
        super(viewModel)
        this.collider = new CircleCollider(this, 0)
    }
}

export {
    Score
}