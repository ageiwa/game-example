import Phaser from 'phaser'
import { Text } from '../entities/text'

export function menuRender(scene: Phaser.Scene, buttons: Text[]) {
    buttons.forEach(button => {
        button.sprite = scene.add.text(button.x, button.y, button.value, {
            fontSize: button.fontSize,
            color: button.color,
        })

        button.sprite.setOrigin(0.5, 0.5)
        button.sprite.setInteractive()

        button.sprite.on('pointerover', () => {
            button.sprite!.style.setColor('#f00')
        })

        button.sprite.on('pointerout', () => {
            button.sprite!.style.setColor(button.color)
        })

        if (button.value === 'Начать') {
            button.sprite.on('pointerdown', () => {
                scene.scene.switch('field')
            })
        }
    })
}