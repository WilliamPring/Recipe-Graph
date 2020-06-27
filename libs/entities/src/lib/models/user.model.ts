import { ObjectID, Entity, Column, ObjectIdColumn } from "typeorm"
import {Contact} from './user.contact.model'

@Entity({name: "user"})
export class User {
    @ObjectIdColumn()
    id: ObjectID

    @Column({type: "string"})
    userName: string;

    @Column()
    contact: Contact
}