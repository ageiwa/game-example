import Phaser from 'phaser'

export type Background = {
    x: number
    y: number
    w: number
    h: number
    color: number
    alpha: number
    sprite: Phaser.GameObjects.Rectangle | null
}

export function createBackground() {
    const background: Background = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        color: 0xffffff,
        alpha: 1,
        sprite: null
    }

    return background
}