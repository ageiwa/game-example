import Phaser from 'phaser'

export type Hero = {
    x: number
    y: number
    width: number
    height: number
    color: number
    slotX: number
    slotY: number
    sprite: Phaser.GameObjects.Rectangle | null
}