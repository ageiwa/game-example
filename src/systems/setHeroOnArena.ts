import Phaser from 'phaser'
import { addMyHero } from '@/entities/Hero/model'
import { createHero } from '@/entities/Hero/lib'
import { Hero } from '@/entities/Hero/types'
import { Arena } from '@/entities/Arena/types'

export function setHeroOnArena(scene: Phaser.Scene, arena: Arena, heroes: Hero[]) {
    if (!arena.sprite) {
        throw new Error('Arena sprite not init')
    }

    scene.input.on('dragend', (ptr: Phaser.Input.Pointer, gObj: Phaser.GameObjects.Rectangle) => {
        const x = ptr.x - arena.x
        const y = ptr.y - arena.y

        arena.slots.forEach(slot => {
            const rightX = slot.x + arena.cellWidth
            const bottomY = slot.y + arena.cellHeight

            if (x > slot.x && y > slot.y && x < rightX && y < bottomY) {
                gObj.setX(slot.x + arena.x)
                gObj.setY(slot.y + arena.y)

                const hero = createHero()
                hero.x = gObj.x
                hero.y = gObj.y
                hero.width = arena.cellWidth
                hero.height = arena.cellHeight
                hero.slotX = gObj.x
                hero.slotY = gObj.y
                hero.color = gObj.fillColor

                addMyHero(hero)
            }
        })

        const findHero = heroes.find(hero => hero.color === gObj.fillColor)

        if (findHero) {
            gObj.setX(findHero.x)
            gObj.setY(findHero.y)
        }
    })
}