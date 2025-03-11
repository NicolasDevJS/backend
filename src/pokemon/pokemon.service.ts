// pokemon.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private http: HttpService) {}

  async getPokemon(name: string) {
    const { data: mainData } = await firstValueFrom(
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`),
    );
    const { data: speciesData } = await firstValueFrom(
      this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
    );

    return {
      name: mainData.name,
      photo: mainData.sprites?.front_default,
      color: speciesData.color?.name,
      types: mainData.types.map((t) => t.type.name),
      abilities: mainData.abilities
        .map((ab) => ab.ability.name)
        .sort((a, b) => a.localeCompare(b)),
      stats: mainData.stats.map((s) => ({
        stat: s.stat.name,
        base: s.base_stat,
      })),
    };
  }
}
