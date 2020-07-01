import { ObjectID } from 'typeorm'

export interface ReceipeDto {
    id: ObjectID;
    parent: ObjectID;
    createDate: Date
    lastModifiedDate: Date
    userName: string;
    url: string;
    about: AboutDto;
    ingredients: Array <IngredientDto>
    instructions: Array<InstructionDto>
}

export interface CreateReceipeDto {
    parent: ObjectID;
    createDate: Date
    lastModifiedDate: Date
    userName: string;
    url: string;
    about: AboutDto;
    ingredients: Array <IngredientDto>
    instructions: Array<InstructionDto>
}
export interface AboutDto {
    prepTime: number
    cookTime: number
    totalTime: number
    yield: number
}

export interface IngredientDto {
    value: string
    quantity: number
  }

export interface InstructionDto {
    step: number
    description: string
}