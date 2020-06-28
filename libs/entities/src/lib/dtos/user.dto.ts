import { Contact } from '../models'
import { ObjectID } from 'typeorm'

export class UserDto {
    id: ObjectID;
    userName!: string;
    contact!: Array<Contact>
}