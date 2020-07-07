import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReceipeDto, CreateReceipeDto } from '@recipe-graph/transfer-object';
import { Recipe } from '@recipe-graph/entities';
import { map } from 'lodash';
@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipesRepository: Repository<Recipe>,
  ) {}


  dtoMapper = (entity: Recipe): ReceipeDto => {
    const { id, ...rest } = entity;
    return {
      id,
      ...rest
    };
  };

  async create(createReceipeDto: CreateReceipeDto): Promise<ReceipeDto> {
    return this.recipesRepository.save({...createReceipeDto}).then(this.dtoMapper);
  }

  async find(where: {}, order: {}, limit: number, offset: number): Promise<ReceipeDto[]> {
    return await this.recipesRepository.find({where: {...where}, order: {...order}, take: limit, skip: offset})
    .then(res => map(res, this.dtoMapper))
  }


  findbyUserName(userName: string): Promise<ReceipeDto> {
    console.log(userName)
    return this.recipesRepository.findOne({where: {userName}}).then(this.dtoMapper);
  }

  // findOne(id: string): Promise<ReceipeDto> {
  //   return this.usersRepository.findOne(id).then(this.dtoMapper);
  // }
}
