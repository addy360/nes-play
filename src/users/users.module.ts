import {CacheModule, Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {HttpModule} from "@nestjs/axios";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";

@Module({
    controllers: [UsersController],
    imports: [HttpModule, TypeOrmModule.forFeature([User]), CacheModule.register(),],
    providers: [UsersService]
})
export class UsersModule {
}