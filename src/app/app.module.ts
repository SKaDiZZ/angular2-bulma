import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Angular2BulmaModule } from 'angular2-bulma';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2BulmaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
