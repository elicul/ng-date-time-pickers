import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' }
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [],
  providers: []
})
export class FeaturesModule {}
