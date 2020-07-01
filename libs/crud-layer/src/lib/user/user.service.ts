import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto, CreateUserDto, UpdateUserDto } from '@recipe-graph/transfer-object';
import { User } from '@recipe-graph/entities';
import { map } from 'lodash';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}


  dtoMapper = (entity: User): UserDto => {
    const { id, ...rest } = entity;
    return {
      id,
      ...rest
    };
  };

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    return this.usersRepository.save({...createUserDto}).then(this.dtoMapper);
  }

  findOne(id: string): Promise<UserDto> {
    return this.usersRepository.findOne(id).then(this.dtoMapper);
  }
  async find(where: {}, order: {}, limit: number, offset: number): Promise<UserDto[]> {
    return await this.usersRepository.find({where: {...where}, order: {...order}, take: limit, skip: offset})
    .then(res => map(res, this.dtoMapper));
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto> {
    await this.usersRepository.update(id, updateUserDto)
    return this.usersRepository.findOne(id).then(this.dtoMapper);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findbyUserName(userName: string): Promise<UserDto> {
    return this.usersRepository.findOne(userName).then(this.dtoMapper);
  }
}
