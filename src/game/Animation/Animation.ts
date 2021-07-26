import { Position } from "../Model/Position";
import { TimingFunctions } from "./TimingFunctions";

abstract class EntityAnimation {
    starts: number;
    ends: number;
    current: number;
    timingFunction: TimingFunctions.TimingFunction;

    startPosition: Position
    scaleParams: number
    
    constructor(ends: number, timingFunction: TimingFunctions.TimingFunction, scaleParams: number = 1) {
        this.starts = performance.now();
        this.current = this.starts + 1;
        this.ends = ends;
        this.timingFunction = timingFunction;
        this.scaleParams = scaleParams
    }

    progress(): number {
        return (this.current - this.starts) / (this.ends - this.starts);
    }

    abstract animate(currentPosition: Position): Position;
}

export { EntityAnimation };
