import Phaser from 'phaser'
import { Arena } from '../entities/arena'

export function arenaRender(scene: Phaser.Scene, arens: Arena[]) {
    arens.forEach(arena => {
        arena.sprite = scene.add.grid(
            arena.x, arena.y,
            arena.cellWidth * arena.horizontalCellCount, arena.cellHeight * arena.verticalCellCount,
            arena.cellWidth, arena.cellHeight,
            arena.fillColor, undefined,
            arena.outlineColor
        )

        arena.sprite.setOrigin(0, 0)
        arena.sprite.setInteractive()
    })
}