import { Injectable } from '@angular/core';

export interface Lvl {
  level: string,
  experience: string
}

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor() { }

  getLvl(): Lvl[] {
    return [
      {
        level: '10',
        experience: '0.3',
      },

      {
        level: '3',
        experience: '0.7',
      },

      {
        level: '5',
        experience: '0.1',
      },
    ]
  }
}
