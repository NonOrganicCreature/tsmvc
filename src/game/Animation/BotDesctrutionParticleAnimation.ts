import { Position } from "../Model/Position";
import { BotDestructionViewModel } from "../ViewModel/BotDestructionViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityAnimation } from "./Animation";

class BotDestructionParticleAnimation extends EntityAnimation {
    animate(currentViewModel: ViewModel): any {
        if (!this.startViewModel) {
            this.startViewModel = new BotDestructionViewModel(
                currentViewModel.radius,
                currentViewModel.color,
                currentViewModel.position
            );
        }
        this.current = performance.now();
        const newPosition = new Position(
            0,
            0,
            this.startViewModel.position.directionX,
            this.startViewModel.position.directionY
        );

        newPosition.x =
            this.startViewModel.position.x +
            this.startViewModel.position.directionX *
                this.timingFunction(this.progress()) *
                this.scaleParams;
        newPosition.y =
            this.startViewModel.position.y +
            this.startViewModel.position.directionY *
                this.timingFunction(this.progress()) *
                this.scaleParams;
        const opacity =
            (1 - this.progress()) *
            this.startViewModel.opacity;
        return { newPosition, opacity: opacity < 0 ? 0 : opacity };
    }
}

export { BotDestructionParticleAnimation };
