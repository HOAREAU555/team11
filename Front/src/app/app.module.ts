import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
// import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPipe } from './register.pipe';

import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [AppComponent, RegisterPipe],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(),AppRoutingModule , FontAwesomeModule ,   HttpClientModule , SharedModule, BrowserAnimationsModule  , MatProgressSpinnerModule],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],


})
export class AppModule {
}
