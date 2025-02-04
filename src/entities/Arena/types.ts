export type Slot = {
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
    sprite: Phaser.GameObjects.Grid | null
}