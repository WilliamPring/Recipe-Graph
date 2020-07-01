
import { Args, Query, Resolver, ResolveReference, Mutation } from '@nestjs/graphql';
// import { UsersService } from '../users.service';
import {RecipeService} from '@recipe-graph/crud-layer'
import { CreateReceipeDto, ReceipeDto } from '@recipe-graph/transfer-object';
@Resolver('Recipe')
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}


  @Mutation()
  async createRecipe(@Args('input') input: CreateReceipeDto) : Promise<ReceipeDto> {
    return this.recipeService.create(input)
  }

  // @ResolveReference()
  // resolveReference(reference: { __typename: string; id: string }) {
  //   return this.usersService.findById(reference.id);
  // }
}
