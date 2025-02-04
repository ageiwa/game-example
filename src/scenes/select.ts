import Phaser from 'phaser'
import { backgroundRender } from '../systems/backgroundRender'
// import { menuRender } from '../systems/menuRender'
import { textRender } from '../systems/textRender'
// import { arenaRender } from '../systems/arenaRender'
import { selectingHero } from '../systems/selectingHero'
import { createBackground } from '../entities/background'
// import { createArena } from '../entities/arena'
import { createHero } from '../entities/hero'
import { createText } from '../entities/text'
import { HEIGHT, WIDTH } from '../utils/constants'

const select = new Phaser.Scene('select')

// @ts-ignore
select.create = createSelect
select.update = updateSelect

function createSelect() {
    const background = createBackground()
    background.w = WIDTH
    background.h = HEIGHT
    background.color = 0x000000
    background.alpha = 0.5

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

    backgroundRender(select, background)

    textRender(select, [
        title
    ])

    selectingHero(select, [
        red,
        blue,
        green
    ])
}

function updateSelect() {

}

export { select }