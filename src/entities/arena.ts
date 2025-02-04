// import Phaser from 'phaser'

type Slot = {
    x: number
    y: number
}

export type Arena = {
    x: number
    y: number
    verticalCellCount: number
    horizontalCellCount: number
    cellWidth: number
    cellHeight: number
    fillColor: number
    outlineColor: number
    slots: Slot[]
}

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
        slots: []
    }

    return arena
}