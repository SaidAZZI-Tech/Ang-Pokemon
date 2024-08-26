import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMON_LIST } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Liste de Pokemons</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonList  = POKEMON_LIST;

  ngOnInit() {
    console.table (this.pokemonList) ;
   // this.selectPokemon(this.pokemonList[0]) ; 
  }


selectPokemon(pokemon: Pokemon) {
  console.log(`Vous avez clique sur le pokemon ${pokemon.name }`)
}

}
