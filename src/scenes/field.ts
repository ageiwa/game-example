import Phaser from 'phaser'
import { arenaRender } from '../systems/arenaRender'
import { selectingHero } from '../systems/selectingHero'
import { textRender } from '../systems/textRender'
import { createArena } from '../entities/arena'
import { createHero } from '../entities/hero'
import { createText } from '../entities/text'
import { HEIGHT, WIDTH } from '../utils/constants'

const field = new Phaser.Scene('field')

// @ts-ignore
field.create = createField
field.update = updateField

function createField() {
    const horizontalCells = 5
    const verticalCells = 4

    const cellWidth = WIDTH / horizontalCells
    const cellHeight = (cellWidth / 1.5)

    const arena = createArena()
    arena.horizontalCellCount = horizontalCells
    arena.verticalCellCount = verticalCells
    arena.cellWidth = cellWidth
    arena.cellHeight = cellHeight
    arena.x = 0
    arena.y = 0

    const myArena = createArena()
    myArena.horizontalCellCount = horizontalCells
    myArena.verticalCellCount = verticalCells
    myArena.cellWidth = cellWidth
    myArena.cellHeight = cellHeight
    myArena.x = 0
    myArena.y = HEIGHT - (cellHeight * verticalCells)

    arenaRender(field, [
        arena,
        myArena
    ])

    const title = createText()
    title.x = WIDTH / 2
    title.y = 220
    title.fontSize = 24
    title.value = 'Выберите героя'
    title.color = '#fff'

    const red = createHero()
    red.color = 0xff0000
    red.width = 50
    red.height = 50

    const blue = createHero()
    blue.color = 0x0000ff
    blue.width = 50
    blue.height = 50

    const green = createHero()
    green.color = 0x008000
    green.width = 50
    green.height = 50

    textRender(field, [
        title
    ])

    selectingHero(field, [
        red,
        blue,
        green
    ])
}

function updateField() {

}

export { field }