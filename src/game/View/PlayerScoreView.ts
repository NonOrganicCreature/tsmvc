import { Player } from "../Model/Player";
import { store } from "../Store";
import { PlayerScoreViewModel } from "../ViewModel/PlayerScoreViewModel";
import { ViewModel } from "../ViewModel/ViewMode";
import { EntityView } from "./EntityView";

class PlayerScoreView extends EntityView {
    constructor(ctx: CanvasRenderingContext2D) {
        super(ctx);
    }

    draw(params: ViewModel) {
        const vm = <PlayerScoreViewModel>params;
        this.ctx.font = '30px Hack';
        this.ctx.fillStyle = vm.color;
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Score: ' + vm.scoreValue, 100, 50);
    }
}

export { PlayerScoreView };
