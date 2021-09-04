import { Component, OnInit } from '@angular/core';
import { LevelService, Lvl } from '../level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  lvl: Lvl[] = this.levelService.getLvl();

  constructor(private levelService: LevelService) { }

  ngOnInit(): void {
    this.lvl.forEach(item => {
      item.experience = parseFloat(item.experience) * 100 + '';
    });
  }

}
