import { Arena } from './types'

export function createArena() {
    const arena: Arena = {
        x: 0,
        y: 0,
        verticalCellCount: 0,
        horizontalCellCount: 0,
        cellWidth: 0,
        cellHeight: 0,
        fillColor: 0x000000,
        outlineColor: 0xffffff,
        slots: [],
        sprite: null
    }

    return arena
}

export function madeArenaSlots(arena: Arena) {
    let x = 0,
        y = 0

    for (let i = 0; i < arena.verticalCellCount; i++) {
        for (let j = 0; j < arena.horizontalCellCount; j++) {
            arena.slots.push({
                x: x,
                y: y
            })

            x += arena.cellWidth
        }

        x = 0
        y += arena.cellHeight
    }
}