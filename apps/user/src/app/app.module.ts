import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import {GraphQLJSON } from 'graphql-type-json';
import { Connection } from 'typeorm';
import {UserProvider} from '@recipe-graph/crud-layer'
import {UserResolvers} from './resolvers/user.resolver'
@Module({
  imports: [
    UserProvider.register(),
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: { JSON: GraphQLJSON }
    }),
  ],
  providers: [UserResolvers]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
