import { ObjectID, Entity, Column, ObjectIdColumn } from "typeorm"

@Entity({name: "receipe"})
export class Receipe {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    parent: ObjectID

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


export class About {
    prepTime!: number
    cookTime!: number
    totalTime!: number
    yield: number
}

export class Ingredients {
    value!: string;
    quantity!: number
}