import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './welcome/details/details.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule, SharedModule, DetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
