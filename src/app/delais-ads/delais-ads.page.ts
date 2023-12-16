
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListadsService } from '../listads.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delais-ads',
  templateUrl: './delais-ads.page.html',
  styleUrls: ['./delais-ads.page.scss'],
})
export class DelaisAdsPage implements OnInit {
  selectedAds :any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private adsSer: ListadsService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p:ParamMap)=>{
        let id =p.get('id');
        console.log(id);
        this.selectedAds= this.adsSer.getadsById(id);
      }
    })
  }
    async PresentAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Confirmation',
        message: 'Etes vous sûr de vouloir supprimer ce cours ?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.adsSer.deleteads(this.selectedAds);
              this.router.navigateByUrl('/home');
            },
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
      });
  
      await alert.present();
   
  
  }

}

