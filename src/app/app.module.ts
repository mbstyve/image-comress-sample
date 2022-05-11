import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxImageCompressService } from 'ngx-image-compress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCompressComponent } from './image-compress/image-compress.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCompressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
