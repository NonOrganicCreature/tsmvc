import { PlayerAttackViewModel } from "../ViewModel/PlayerAttackViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityAnimation } from "./Animation";

class PlayerAttackAnimation extends EntityAnimation {
    animate(currentViewModel: ViewModel): any {
        if (!this.startViewModel) {
            this.startViewModel = new PlayerAttackViewModel(
                currentViewModel.radius,
                currentViewModel.color,
                currentViewModel.position
            );
        }
        this.current = performance.now();
        const radius =
            this.scaleParams *
            (<PlayerAttackViewModel>this.startViewModel).radius *
            this.timingFunction(this.progress());

        return radius;
    }
}

export { PlayerAttackAnimation };
