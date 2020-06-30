
import { Args, Query, Resolver, ResolveReference, Mutation } from '@nestjs/graphql';
// import { UsersService } from '../users.service';
import {UserService} from '@recipe-graph/crud-layer'
import { UserDto, CreateUserDto, UpdateUserDto} from '@recipe-graph/transfer-object';
@Resolver('User')
export class UserResolvers {
  constructor(private userService: UserService) {}

  @Query()
  getUser(@Args('id') id: string) : Promise<UserDto> {
    return this.userService.findOne(id);
  }


  @Query()
  getUsers(@Args('where') where: {}, @Args('order') order:{}, @Args('limit') limit: number, @Args('offset') offset: number) : Promise<UserDto[]>{
    const data = this.userService.find(where, order, limit, offset);
    return data;
  }


  @Mutation()
  async createUser(@Args('input') input: CreateUserDto) : Promise<UserDto> {
    return this.userService.create(input)
  }

  @Mutation()
  async updateUser(@Args('id') id: string, @Args('input') input: UpdateUserDto) : Promise<UserDto> {
    return this.userService.update(id, input);
  }

  // @ResolveReference()
  // resolveReference(reference: { __typename: string; id: string }) {
  //   return this.usersService.findById(reference.id);
  // }
}
