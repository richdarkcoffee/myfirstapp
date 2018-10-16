import { Component, OnInit } from '@angular/core';
import { Catalyst } from '../catalyst';
import { CATALYSTS } from '../mock-catalysts';

@Component({
  selector: 'app-catalyst-item',
  templateUrl: './catalyst-item.component.html',
  styleUrls: ['./catalyst-item.component.css']
})
export class CatalystItemComponent implements OnInit {
  catalysts = CATALYSTS;

  constructor() { 
  }
  ngOnInit() {
  }
selectedCatalyst: Catalyst;
onSelect(catalyst: Catalyst): void {
  this.selectedCatalyst = catalyst;
}
}
