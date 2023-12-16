import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelaisAdsPage } from './delais-ads.page';

const routes: Routes = [
  {
    path: '',
    component: DelaisAdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelaisAdsPageRoutingModule {}
