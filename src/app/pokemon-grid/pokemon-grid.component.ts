import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {
  //PokemonGrid: Pokemon[] = [];
  poke: any;
  pokemonArrayDetails: Array<any> = [];

  constructor(private ApiService: ApiService) { }


  ngOnInit(): void {
    this.getPokemon();
    //this.getImage();
  }

  getPokemon(): void {
    for (let i = 1; i < 899; i++) {
      this.poke = this.ApiService.GetPokemonById(i);
      this.pokemonArrayDetails.push(this.poke);
    }
  }

  // getPokemon(): void {
  //   this.ApiService.GetAll().then((res) => {
  //     this.pokemonArray = res.results;

  //   }).catch((res) => {
  //     console.log(res);
  //   });
  // }

  // getImage(): void {
  //   for (let i = 0; i < this.pokemonArray.length; i++) {
  //     let position = i + 1;
  //     let pokemon = this.ApiService.GetPokemonByName(position);
  //     console.log(pokemon);
  //     this.pokemonArrayDetails.push(pokemon);
  //   } 
  // }


}
