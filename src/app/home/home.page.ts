import { Component } from '@angular/core';
import { ListadsService } from '../listads.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabads : any[]=[];
  constructor(private adsSer: ListadsService) { }

  ngOnInit() {
    this.tabads = this.adsSer.getAllads();
  }
  
}
