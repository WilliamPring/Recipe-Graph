import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User} from '@recipe-graph/entities';
import { UserService } from './user.service';

@Module({})
export class UserProvider {
  static register(): DynamicModule {
    return {
      module: UserProvider,
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
        TypeOrmModule.forFeature([User])
      ],
      providers: [UserService],
      exports: [UserService]
    };
  }
}
