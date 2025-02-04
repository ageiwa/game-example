import { Hero } from './types'

const heroStore = {
    myHeroes: [] as Hero[],
    enemyHeroes: [] as Hero[],
    heroColor: null as number | null
}

function addMyHero(hero: Hero) {
    heroStore.myHeroes.push(hero)
}

function addEnemyHero(hero: Hero) {
    heroStore.enemyHeroes.push(hero)
}

function selectHero(color: number) {
    heroStore.heroColor = color
}

export {
    heroStore,
    addMyHero,
    addEnemyHero,
    selectHero
}