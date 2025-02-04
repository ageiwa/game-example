import Phaser from 'phaser'

export type Model = {
    selectingHero: number | null
}

export type Hero = {
    x: number
    y: number
    width: number
    height: number
    color: number
    cell: number
    sprite: Phaser.GameObjects.Rectangle | null
}

export const model: Model = {
    selectingHero: null
}

export function selectHero(color: number) {
    model.selectingHero = color
}

export function createHero() {
    const hero: Hero = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        color: 0xffffff,
        cell: 0,
        sprite: null
    }

    return hero
}