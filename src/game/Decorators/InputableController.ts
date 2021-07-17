const inputable = <T extends { new (...args: any[]): {}}>(target: T) => {
    return class extends target {
        constructor(...args: any) {
            super(...args)
            window.addEventListener('keydown', target.prototype.inputEventHandler.bind(this))
            window.addEventListener('keyup', target.prototype.inputEventHandler.bind(this))
            window.addEventListener('keypress', target.prototype.inputEventHandler.bind(this))
        }
    }
}

export {
    inputable
}