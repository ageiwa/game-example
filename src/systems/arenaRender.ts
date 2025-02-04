import Phaser from 'phaser'
import { Arena } from '../entities/arena'

export function arenaRender(scene: Phaser.Scene, arens: Arena[]) {
    arens.forEach(arena => {
        const grid = scene.add.grid(
            arena.x, arena.y,
            arena.cellWidth * arena.horizontalCellCount, arena.cellHeight * arena.verticalCellCount,
            arena.cellWidth, arena.cellHeight,
            arena.fillColor, undefined,
            arena.outlineColor
        )

        let x = 0

        for (let i = 0; i < arena.horizontalCellCount; i++) {
            arena.slots.push({
                x: x,
                y: 0
            })

            x += arena.cellWidth
        }

        console.log(arena.slots)

        grid.setOrigin(0, 0)
        grid.setInteractive()

        grid.on('pointermove', (_: Phaser.Input.Pointer, x: number, y: number) => {
            console.log(x, y)
        })
    })
}