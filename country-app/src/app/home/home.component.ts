import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Fun Facts About Countries';


  // buttonSort = false;
  isSortedCountries = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isSortedCountries = !this.isSortedCountries;
  }



}
