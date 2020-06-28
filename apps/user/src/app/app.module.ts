import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLFederationModule } from '@nestjs/graphql';
import {GraphQLJSON } from 'graphql-type-json';
import {UserModule} from './user.module'
import { Connection } from 'typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      username: 'root',
      password: 'root',
      database: 'admin',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: { JSON: GraphQLJSON }
    }),

  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
