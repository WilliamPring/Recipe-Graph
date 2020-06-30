import { ObjectID } from 'typeorm'

export interface UserDto {
    id: ObjectID;
    userName: string;
    contact: Array<ContactDto>
}

export interface ContactDto {
  type: string
  value: string;
}
