import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'cards-header',
  templateUrl: './cards-header.component.html',
  styleUrls: ['./cards-header.component.css']
})
export class CardsHeaderComponent implements OnInit {

  @Input() header: any;
  constructor() { 
  }
  ngOnInit() {     
  }
}
