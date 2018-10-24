import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { ConfigurationService } from './services/configuration.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddHeaderInterceptor } from './interceptors/add-header.interceptor';

export const COMPONENTS = [
  CoreComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot(): any {
    return {
      ngModule: CoreModule,
      providers: [
        ConfigurationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AddHeaderInterceptor,
          multi: true
        }
      ]
    };
  }
}
