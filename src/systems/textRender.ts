import Phaser from 'phaser'
import { Text } from '../entities/text'

export function textRender(scene: Phaser.Scene, texts: Text[]) {
    texts.forEach(text => {
        text.sprite = scene.add.text(text.x, text.y, text.value, {
            fontSize: text.fontSize,
            color: text.color,
        })

        text.sprite.setOrigin(0.5, 0)
    })
}