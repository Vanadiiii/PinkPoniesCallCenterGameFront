import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getQuicklyFallen() {
    return [
      {position: 1, name: 'Griffinish', weight: 1900, symbol: '-1000'},
      {position: 2, name: 'Orangutank', weight: 2010, symbol: '-941'},
      {position: 3, name: 'Llamaths', weight: 1550, symbol: '-800'},
      {position: 4, name: 'Chinchilling', weight: 100, symbol: '-753'},
      {position: 5, name: 'CaringSkunk', weight: 1811, symbol: '-634'},
      {position: 6, name: 'DiscreteNewt', weight: 107, symbol: '-632'},
      {position: 7, name: 'BubblyBadger', weight: 147, symbol: '-521'},
      {position: 8, name: 'WeirdMagician', weight: 1594, symbol: '-400'},
      {position: 9, name: 'CleanEel', weight: 184, symbol: '-300'},
      {position: 10, name: 'FireClam', weight: 207, symbol: '-290'},
    ]
  }

  getSlowOperators() {
    return [
      {position: 1, name: 'RedHerring', weight: 100, symbol: '-1000'},
      {position: 2, name: 'Dismage', weight: 20, symbol: '+5'},
      {position: 3, name: 'Cubeast', weight: 155, symbol: '-800'},
      {position: 4, name: 'Iconjurer', weight: 10, symbol: '+3'},
      {position: 5, name: 'GlamorousGoblin', weight: 111, symbol: '-134'},
      {position: 6, name: 'CarelessRhinoceros', weight: 7, symbol: '+5'},
      {position: 7, name: 'HiddenSquid', weight: 17, symbol: '+10'},
      {position: 8, name: 'WaterStripes', weight: 194, symbol: '+100'},
      {position: 9, name: 'GiantRedPanda', weight: 84, symbol: '+4'},
      {position: 10, name: 'IslandViking', weight: 20, symbol: '+15'},
    ]
  }

  getOperatorsWithmanyMistakes() {
    return [
      {position: 1, name: 'Meerkatnip', weight: 1100, symbol: '-100'},
      {position: 2, name: 'Gladiablo', weight: 120, symbol: '+50'},
      {position: 3, name: 'Hyenada', weight: 1255, symbol: '-600'},
      {position: 4, name: 'Preaster', weight: 1120, symbol: '+30'},
      {position: 5, name: 'ShadyMonster', weight: 1110, symbol: '-132'},
      {position: 6, name: 'IllegalRaider', weight: 700, symbol: '+50'},
      {position: 7, name: 'UncleHorse', weight: 1712, symbol: '+101'},
      {position: 8, name: 'FirstWallaby', weight: 194, symbol: '+10'},
      {position: 9, name: 'MountainSphinx', weight: 840, symbol: '+40'},
      {position: 10, name: 'AmazingSeal', weight: 200, symbol: '+15'},
    ]
  }

  constructor() { }
}
