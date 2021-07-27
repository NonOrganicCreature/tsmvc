import { Position } from "../Model/Position";
import { Observable } from "../Observing/Observable";

class ViewModel extends Observable {
    _radius: number = 30;
    _opacity: number = 1;
    _color: string = "#00f";
    _position: Position;

    constructor(radius: number, color: string, position: Position) {
        super();
        this._radius = radius;
        this._color = color;
        this._position = position;
        this.notifyObservers(this);
    }

    set radius(value: number) {
        this._radius = value;
        this.notifyObservers(this);
    }

    get opacity(): number {
        return this._opacity;
    }
    set opacity(value: number) {
        this._opacity = value;
        this.notifyObservers(this);
    }

    get radius(): number {
        return this._radius;
    }
    set color(value: string) {
        this._color = value;
        this.notifyObservers(this);
    }

    get color(): string {
        return this._color;
    }

    get position(): Position {
        return this._position;
    }

    set position(value: Position) {
        this._position = value;
        this.notifyObservers(this);
    }
}

export { ViewModel };
