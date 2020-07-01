import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from '@recipe-graph/entities';
import { RecipeService } from './recipe.service';
import {RecipeModuleOptions} from './recipe.options'
@Module({})
export class RecipeProvider {
  static register(recipeModuleOptions: RecipeModuleOptions): DynamicModule {
    return {
      module: RecipeProvider,
      imports: [
        TypeOrmModule.forRoot({
          ...recipeModuleOptions.typeOrmOption,
          synchronize: true,
          autoLoadEntities: true,
        }),
        TypeOrmModule.forFeature([Recipe])
      ],
      providers: [RecipeService],
      exports: [RecipeService]
    };
  }
}
