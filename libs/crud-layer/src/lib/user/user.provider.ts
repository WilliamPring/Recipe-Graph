import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User} from '@recipe-graph/entities';
import { UserService } from './user.service';
import {UserModuleOptions} from './user.options'
@Module({})
export class UserProvider {
  static register(userModuleOptions: UserModuleOptions): DynamicModule {
    return {
      module: UserProvider,
      imports: [
        TypeOrmModule.forRoot({
          ...userModuleOptions.typeOrmOption,
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
