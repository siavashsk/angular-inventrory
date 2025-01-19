import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {
    let a: number = 10;
    let array: any;
  }

  ngOnInit() {}
}

class About {
  constructor(private _title: string, private _year: number) {}

  printAbout() {
    return this._title + ' | ' + this._year;
  }
}

const about = new About('PLS', 2017);
console.log(about.printAbout);
