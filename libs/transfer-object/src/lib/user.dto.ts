import { ObjectID } from 'typeorm'

export interface UserDto {
    id: ObjectID;
    userName: string;
    contact: Array<ContactDto>
}

export interface UpdateUserDto {
  userName: string;
  contact: Array<ContactDto>
}

export interface CreateUserDto {
  userName: string;
  contact: Array<ContactDto>
}

export interface ContactDto {
  type: string
  value: string;
}
