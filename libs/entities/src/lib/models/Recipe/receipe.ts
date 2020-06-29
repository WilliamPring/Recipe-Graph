import { ObjectID, Entity, Column, ObjectIdColumn } from "typeorm"
import {Ingredients, About} from '..'

@Entity({name: "receipe"})
export class Receipe {
    @ObjectIdColumn()
    id: ObjectID

    @Column({type: "string"})
    parent: string

    @Column({type: "date"})
    createDate: Date

    @Column({type: "string"})
    userName: string;

    @Column({type: "string"})
    url: string;

    @Column()
    about: About

    @Column()
    ingredients: Array<Ingredients>
}