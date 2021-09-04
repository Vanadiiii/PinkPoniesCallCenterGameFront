import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.router.events.subscribe((item: any) => {
      if(item.url?.includes('main') || item.url?.includes('shop')) {
        this.user = 'user';
      } else if (item.url?.includes('admin')) {
        this.user = 'admin';
      } else if (item.url) {
        this.user = '';
      }
    })
  }

  exit() {
    this.router.navigateByUrl('/');
  }

}
