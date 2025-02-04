import Phaser from 'phaser'
import { Background } from '../entities/background'

export function backgroundRender(scene: Phaser.Scene, background: Background) {
    background.sprite = scene.add.rectangle(background.x, background.y, background.w, background.h, background.color, background.alpha)
    background.sprite.setOrigin(0, 0)
}