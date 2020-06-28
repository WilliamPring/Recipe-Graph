
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
// import { UsersService } from '../users.service';
import {UserService, UserDto} from '@recipe-graph/entities'
@Resolver('User')
export class UserResolvers {
  constructor(private userService: UserService) {}

  // @Query()
  // getUser(@Args('id') id: string) {
  //   return this.userService.findOne(id);
  // }

  // @ResolveReference()
  // resolveReference(reference: { __typename: string; id: string }) {
  //   return this.usersService.findById(reference.id);
  // }
}