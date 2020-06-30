import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import {Injectable} from '@nestjs/common'


@Injectable()
export class UserModuleOptions {
    typeOrmOption: TypeOrmModuleOptions;
    constructor(init: Partial<UserModuleOptions>) {
        console.log(init)
        Object.assign(this, init)
    }
}