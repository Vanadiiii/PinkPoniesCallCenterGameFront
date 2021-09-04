import { Injectable } from '@angular/core';

export interface Score {
  score: string,
  money: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getAchievments() {
    return [
      {
        img: '/assets/ach6.PNG',
        name: 'Это только начало',
        description: 'Обработал свой первый документ'
      },

      {
        img: '/assets/ach7.PNG',
        name: 'Избирательный кот',
        description: 'Обработал N документов корректно'
      },

      {
        img: '/assets/ach1.PNG',
        name: 'Самый ответственный кот этого месяца',
        description: 'По итогам месяца самый высокий процент корректно обработанных документов'
      },

      {
        img: '/assets/ach2.PNG',
        name: 'Спринтер',
        description: 'В течение часа обработал N документов'
      },

      {
        img: '/assets/ach3.PNG',
        name: 'Великий работник дня',
        description: 'В течение дня обработал N*8 документов'
      },

      {
        img: '/assets/ach4.PNG',
        name: 'КМС на длинные дистанции',
        description: 'В течение месяца обработал N*8*21 документов'
      },

      {
        img: '/assets/ach5.PNG',
        name: 'МС на длинные дистанции',
        description: 'По итогам месяца имел наибольшее количество обработанных документов'
      },

      {
        img: '/assets/ach8.PNG',
        name: 'Лучший кот в этом году',
        description: 'Набрал наибольшее количество очков за год'
      },
    ]
  }

  public getScore(): Score {
    return {
      score: '2500',
      money: '100',
    }
  }
}
