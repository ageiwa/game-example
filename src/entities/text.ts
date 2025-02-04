import Phaser from 'phaser'

export type Text = {
    x: number
    y: number
    value: string
    fontSize: number
    color: string
    sprite: Phaser.GameObjects.Text | null
}

export function createText() {
    const text: Text = {
        x: 0,
        y: 0,
        value: '',
        fontSize: 16,
        color: '#000',
        sprite: null
    }

    return text
}