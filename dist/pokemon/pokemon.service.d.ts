import { HttpService } from '@nestjs/axios';
export declare class PokemonService {
    private http;
    constructor(http: HttpService);
    getPokemon(name: string): Promise<{
        name: any;
        photo: any;
        color: any;
        types: any;
        abilities: any;
        stats: any;
    }>;
}
