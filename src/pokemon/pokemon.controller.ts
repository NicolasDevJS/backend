import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':name')
  getPokemon(@Param('name') name: string) {
    return this.pokemonService.getPokemon(name);
  }
}
