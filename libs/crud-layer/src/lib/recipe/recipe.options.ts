import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import {Injectable} from '@nestjs/common'


@Injectable()
export class RecipeModuleOptions {
    typeOrmOption: TypeOrmModuleOptions;
    constructor(init: Partial<RecipeModuleOptions>) {
        console.log(init)
        Object.assign(this, init)
    }
}