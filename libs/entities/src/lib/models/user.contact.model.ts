import { Entity, Column  } from "typeorm"


@Entity({name: "Contact"})
export class Contact {
    @Column({type: "string"})
    type!: string

    @Column({type: "string"})
    value!: string;
}