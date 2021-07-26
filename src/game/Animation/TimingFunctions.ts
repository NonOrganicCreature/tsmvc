namespace TimingFunctions {
    export type TimingFunction = (progress: number) => number

    export const quad: TimingFunction = (progress: number): number => {
        return Math.pow(progress, 2)
    }

    export const bow: TimingFunction = (progress: number, elastic: number = 0.5): number => {
        return Math.pow(progress, 2) * ((elastic + 1) * progress - elastic)
    }
}

export { TimingFunctions }