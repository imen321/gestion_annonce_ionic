import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAdsPageRoutingModule } from './add-ads-routing.module';

import { AddAdsPage } from './add-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAdsPageRoutingModule
  ],
  declarations: [AddAdsPage]
})
export class AddAdsPageModule {}
