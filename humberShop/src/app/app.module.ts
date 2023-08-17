import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, IndexComponent, HttpClientModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}


