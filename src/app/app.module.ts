import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { HistoriaComponent } from './historia/historia.component';
import { ItemsComponent } from './items/items.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EasterEggComponent,
    PokemonGridComponent,
    HistoriaComponent,
    ItemsComponent,
    PokemonDetailComponent,
    ItemsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
