import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import {GraphQLJSON } from 'graphql-type-json';
import {RecipeProvider} from '@recipe-graph/crud-layer'
import {RecipeResolver} from './resolvers/recipe.resolver'
import * as config  from 'config'
@Module({
  imports: [
    RecipeProvider.register(config.get('Configuration')),
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/recipe.schema.graphql'],
      resolvers: { JSON: GraphQLJSON }
    }),
  ],
  providers: [RecipeResolver]
})
export class AppModule {}
