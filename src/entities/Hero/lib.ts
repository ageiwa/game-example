import { Hero } from './types'

export function createHero() {
    const hero: Hero = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        color: 0xffffff,
        slotX: 0,
        slotY: 0,
        sprite: null
    }

    return hero
}