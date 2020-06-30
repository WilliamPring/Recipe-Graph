import {Module} from '@nestjs/common';
import {User, UserService} from '@recipe-graph/entities';
import {UserResolvers} from './resolvers/user.resolver'
import {TypeOrmModule} from '@nestjs/typeorm';
import { DateScalar } from "@recipe-graph/configurations";
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, UserResolvers]
})
export class UserModule {}
