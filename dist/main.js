"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const pokemon_module_1 = require("./pokemon/pokemon.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(pokemon_module_1.PokemonModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map