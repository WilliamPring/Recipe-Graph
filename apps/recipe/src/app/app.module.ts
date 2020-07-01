import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import {GraphQLJSON } from 'graphql-type-json';
import { Connection } from 'typeorm';
import {RecipeProvider} from '@recipe-graph/crud-layer'
import {RecipeResolver} from './resolvers/recipe.resolver'
import * as config  from 'config'
@Module({
  imports: [
    RecipeProvider.register(config.get('Configuration')),
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
      resolvers: { JSON: GraphQLJSON }
    }),
  ],
  providers: [RecipeResolver]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
