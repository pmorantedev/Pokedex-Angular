import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { ItemsComponent } from './items/items.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'arceus', component: EasterEggComponent  },
  { path: 'pokemon', component: PokemonGridComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'items', component: ItemsComponent},
  { path: 'pokemon/:name', component: PokemonDetailComponent},
  { path: 'items/:name', component: ItemsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
