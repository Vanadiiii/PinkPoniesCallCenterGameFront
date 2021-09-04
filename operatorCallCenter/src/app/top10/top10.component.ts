import { Component, OnInit } from '@angular/core';
import { TopPeople, TopService } from '../top.service';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
  public top: TopPeople[] = this.topService.getTop();

  constructor(public topService: TopService) { }

  ngOnInit(): void {
  }

}
