import { Entity } from '../Model/Entity'
class DB {
    entities: Array<Entity>

    constructor() {
        this.entities = []
    }

    initializeDB(entityCount: number): void {
        let counter: number = entityCount
        while (counter > 0) {
            this.entities.push(new Entity())
            counter -= 1
        }
    }
}

export {
    DB
}