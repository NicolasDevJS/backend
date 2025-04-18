"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let PokemonService = class PokemonService {
    constructor(http) {
        this.http = http;
    }
    async getPokemon(name) {
        const { data: mainData } = await (0, rxjs_1.firstValueFrom)(this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`));
        const { data: speciesData } = await (0, rxjs_1.firstValueFrom)(this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`));
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
};
exports.PokemonService = PokemonService;
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map