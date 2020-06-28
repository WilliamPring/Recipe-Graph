import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../dtos/user.dto';
import { User } from '../models/user.model';

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
  async update(updateUserDto: UserDto): Promise<User> {
    const user = await this.usersRepository.update(updateUserDto.id, updateUserDto)
    console.log(user)
    return this.usersRepository.findOne(updateUserDto.id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}