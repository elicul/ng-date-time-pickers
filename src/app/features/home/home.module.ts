import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgDateTimePickersModule } from 'ng-date-time-pickers';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(ROUTES),
    NgDateTimePickersModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
