import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { SncfSigMapComponent } from './sncf-sig-map/sncf-sig-map.component';
import { SncfSigHeaderComponent } from './sncf-sig-header/sncf-sig-header.component';
import { SncfSigMapContainerComponent } from './sncf-sig-map-container/sncf-sig-map-container.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    SncfSigMapComponent,
    SncfSigHeaderComponent,
    SncfSigMapContainerComponent
  ],
  imports: [
    BrowserModule,
    AngularSplitModule.forRoot(),
  ],
  providers: [ ]

})
export class AppModule { }
