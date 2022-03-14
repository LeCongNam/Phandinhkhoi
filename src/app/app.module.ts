import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/template/header/header.component';
import { FooterComponent } from './homepage/template/footer/footer.component';
import { MenuComponent } from './homepage/template/menu/menu.component';
import { ContentComponent } from './homepage/content/content.component';
import { SliderComponent } from './homepage/template/slider/slider.component';
import { HttpClientModule } from "@angular/common/http";
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { FormProductComponent } from './homepage/form-product/form-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    SliderComponent,
    FormProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'djvgheijr' } as CloudinaryConfiguration),
    CloudinaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
