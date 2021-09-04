import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soon-achievement',
  templateUrl: './soon-achievement.component.html',
  styleUrls: ['./soon-achievement.component.css']
})
export class SoonAchievementComponent implements OnInit {

  achieve = {
    img: '/assets/ach7.PNG',
    name: 'Избирательный кот',
    description: 'Обработал N документов корректно'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
