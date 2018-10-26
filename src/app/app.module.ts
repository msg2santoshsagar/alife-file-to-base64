import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlifeFileToBase64Module } from 'projects/alife-file-to-base64/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
