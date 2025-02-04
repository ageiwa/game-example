import Phaser from 'phaser'
import { backgroundRender } from '../systems/backgroundRender'
import { menuRender } from '../systems/menuRender'
import { createBackground } from '../entities/background'
import { createText } from '../entities/text'
import { WIDTH, HEIGHT } from '../utils/constants'

const menu = new Phaser.Scene('menu')

// @ts-ignore
menu.create = createMenu
menu.update = updateMenu

function createMenu() {
    const background = createBackground()
    background.w = WIDTH
    background.h = HEIGHT
    background.color = 0x000000

    const start = createText()
    start.x = WIDTH / 2
    start.y = (HEIGHT / 2) - 20
    start.value = 'Начать'
    start.fontSize = 24
    start.color = '#fff'

    const settings = createText()
    settings.x = WIDTH / 2
    settings.y = (HEIGHT / 2) + 20
    settings.value = 'Настройки'
    settings.fontSize = 24
    settings.color = '#fff'

    backgroundRender(menu, background)

    menuRender(menu, [
        start,
        settings
    ])
}

function updateMenu() {
    
}

export { menu }