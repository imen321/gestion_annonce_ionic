import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelaisAdsPageRoutingModule } from './delais-ads-routing.module';

import { DelaisAdsPage } from './delais-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelaisAdsPageRoutingModule,
  ],
  declarations: [DelaisAdsPage]
})
export class DelaisAdsPageModule {}
