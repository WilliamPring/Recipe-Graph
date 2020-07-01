import { ObjectID, Entity, Column, ObjectIdColumn } from "typeorm"


class Instruction {
    step: number
    description: string
  }
class About {
    prepTime!: number
    cookTime!: number
    totalTime!: number
    yield: number
}

class Ingredients {
    value!: string;
    quantity!: number
}


@Entity({name: "recipe"})
export class Recipe {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    parent: ObjectID

    @Column({type: "date"})
    createDate: Date

    @Column({type: "date"})
    lastModifiedDate: Date

    @Column({type: "string"})
    userName: string;

    @Column({type: "string"})
    url: string;

    @Column()
    about: About;

    @Column()
    ingredients: Array<Ingredients>

    @Column()
    instructions: Array<Instruction>
}

