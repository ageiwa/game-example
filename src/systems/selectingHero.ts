import Phaser from 'phaser'
import { selectHero } from '@/entities/Hero/model'
import { Hero } from '@/entities/Hero/types'
import { WIDTH, HEIGHT } from '@/utils/constants'

export function selectingHero(scene: Phaser.Scene, heroes: Hero[]) {
    const SPACE_WIDTH = (WIDTH / 3)

    heroes.forEach((hero, i) => {
        const FREE_SPACE = SPACE_WIDTH - hero.width

        let x = (WIDTH / 3) * (i + 1)
        hero.x = x - hero.width - (FREE_SPACE / 2)

        let y = (HEIGHT / 2) - (hero.height / 2)
        hero.y = y

        hero.sprite = scene.add.rectangle(hero.x, hero.y, hero.width, hero.height, hero.color)
        
        hero.sprite.setOrigin(0, 0)
        hero.sprite.setInteractive({ draggable: true })

        hero.sprite.on('pointerover', () => {
            hero.sprite?.setX(hero.x - 5)
            hero.sprite?.setY(hero.y - 5)
            hero.sprite?.setSize(60, 60)
        })

        hero.sprite.on('pointerout', () => {
            hero.sprite?.setX(hero.x)
            hero.sprite?.setY(hero.y)
            hero.sprite?.setSize(50, 50)
        })

        hero.sprite.on('pointerdown', () => {
            selectHero(hero.color)
        })

        scene.input.on('drag', (_: Phaser.Input.Pointer, gObj: Phaser.GameObjects.Rectangle, x: number, y: number) => {
            gObj.setPosition(x, y)
        })
    })
}