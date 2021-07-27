import { ViewModel } from "../ViewModel/ViewMode";
import { Entity } from "./Entity";

class Particle extends Entity {
    constructor(viewModel: ViewModel) {
        super(viewModel)
    }
}

export { Particle }