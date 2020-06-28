import { Entity, Column  } from "typeorm"


export class Contact {
    type!: string
    value!: string;
}