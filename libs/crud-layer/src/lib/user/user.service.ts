import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '@recipe-graph/transfer-object';
import { User } from '@recipe-graph/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: UserDto): Promise<User> {
    return this.usersRepository.save({...createUserDto});
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }
  async find(where: {}, order: {}, limit: number, offset: number): Promise<User[]> {
    const data = await this.usersRepository.find({where: {...where}, order: {...order}, take: limit, skip: offset});
    console.log(data)
    return data
  }
  async update(updateUserDto: UserDto): Promise<User> {
    const user = await this.usersRepository.update(updateUserDto.id, updateUserDto)
    console.log(user)
    return this.usersRepository.findOne(updateUserDto.id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
