import { Component, OnInit } from '@angular/core';
import { Score, UserService } from '../user.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: Score = this.userService.getScore();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
