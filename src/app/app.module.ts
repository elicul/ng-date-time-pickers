import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreComponent } from './core/core.component';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    RouterModule,
    FeaturesModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [CoreComponent]
})
export class AppModule { }
