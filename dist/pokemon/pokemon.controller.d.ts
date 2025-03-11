import { PokemonService } from './pokemon.service';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    getPokemon(name: string): Promise<{
        name: any;
        photo: any;
        color: any;
        types: any;
        abilities: any;
        stats: any;
    }>;
}
