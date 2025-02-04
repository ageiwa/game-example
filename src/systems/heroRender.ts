import Phaser from 'phaser'
import { Hero } from '@/entities/Hero/types'

export function heroRender(scene: Phaser.Scene, heroes: Hero[]) {
    heroes.forEach(hero => {
        if (!hero.sprite) {
            hero.sprite = scene.add.rectangle(hero.x, hero.y, hero.width, hero.height, hero.color)
            hero.sprite.setOrigin(0, 0)
        }
        else {
            hero.sprite.setPosition(hero.x, hero.y)
        }
    })
}