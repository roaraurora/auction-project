import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating = 0;

  @Input()
  private readOnly = true;

  public stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    console.log('xxx');
    if (!this.readOnly) {
      this.rating = index + 1;
      this.ngOnInit();
    }
  }

}
