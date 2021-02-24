import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RetailComponent } from './retail/retail.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RetailComponent,
    FooterCompComponent,
    PrivacyNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
