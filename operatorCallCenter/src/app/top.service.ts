import { Injectable } from '@angular/core';

export interface TopPeople {
  name: string,
  score: string,
}

@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor() { }

  getTop(): Array<TopPeople> {
    return [
      {name: 'operator1', score: '10000'},
      {name: 'operator2', score: '9800'},
      {name: 'operator3', score: '9700'},
      {name: 'operator4', score: '9600'},
      {name: 'operator5', score: '9500'},
      {name: 'operator6', score: '9400'},
      {name: 'operator7', score: '9300'},
      {name: 'operator8', score: '9200'},
      {name: 'operator9', score: '9100'},
      {name: 'operator10', score: '9000'},
    ]
  }
}
