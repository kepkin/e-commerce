import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AsyncPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CartComponent } from './cart/cart.component';

import { HeroService } from './hero.service';
import { CartService } from './cart.service';
import { Btx24Service } from './btx24.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    //AsyncPipe
  ],
  providers: [
  	HeroService,
  	CartService,
  	Btx24Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
