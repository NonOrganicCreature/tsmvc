import { Observer } from './Observer'
abstract class Observable {
    observers: Array<Observer>
    
    constructor() {
        this.observers = []
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    protected notifyObservers(params: any): void {
        this.observers.forEach(observer => observer.onNotifyCallback(params))
    }
}

export {
    Observable
}