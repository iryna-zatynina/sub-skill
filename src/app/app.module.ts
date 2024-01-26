import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SubscribeFormComponent } from './layout/footer/subscribe-form/subscribe-form.component';
import { SocialButtonComponent } from './layout/footer/social-button/social-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, SideBarComponent, FooterComponent, SubscribeFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
