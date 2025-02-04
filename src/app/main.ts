import Phaser from 'phaser'
import { menu } from '../scenes/menu'
import { field } from '../scenes/field'
import { select } from '../scenes/select'
import { WIDTH, HEIGHT } from '../utils/constants'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: WIDTH,
    height: HEIGHT,
    scene: [ menu, field, select ],
}

new Phaser.Game(config)