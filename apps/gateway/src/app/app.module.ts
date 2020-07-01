
import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'users', url: 'http://localhost:3333/graphql' },
          { name: 'recipes', url: 'http://localhost:3335/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}