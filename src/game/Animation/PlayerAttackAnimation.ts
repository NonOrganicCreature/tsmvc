import { Position } from "../Model/Position";
import { EntityAnimation } from "./Animation";

class PlayerAttackAnimation extends EntityAnimation {
    animate(currentPosition: Position): Position {
        if (!this.startPosition) {
            this.startPosition = currentPosition
        }
        this.current = performance.now();

        const radius = this.scaleParams * this.startPosition.radius * this.timingFunction(this.progress());
        return { ...currentPosition, radius: radius };
    }
}

export { PlayerAttackAnimation };
