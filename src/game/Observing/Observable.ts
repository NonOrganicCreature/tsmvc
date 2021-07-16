import { Observer } from './Observer'
abstract class Observable {
    observers: Array<Observer>
    
    registerObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    notifyObservers(params: any): void {
        this.observers.forEach(observer => observer.onNotifyCallback(params))
    }
}

export {
    Observable
}