import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadsService } from '../listads.service';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.page.html',
  styleUrls: ['./add-ads.page.scss'],
})
export class AddAdsPage implements OnInit {

  constructor(private adsSer: ListadsService, private router: Router) { }

  ngOnInit() {}
  
  onSubmit(newads:any) {
    this.adsSer.addads(newads);
    this.router.navigateByUrl('/home');
  }
}
