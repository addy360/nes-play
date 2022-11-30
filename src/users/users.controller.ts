import {Controller, Get, Post, Body, Patch, Param, Delete, Inject, CACHE_MANAGER} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {Cache} from "cache-manager"

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService, @Inject(CACHE_MANAGER) private cache: Cache) {
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    async findAll() {
        let users = await this.cache.get<CreateUserDto[]>("users");
        if (users) {
            console.log("From cache")
            return users;

        }
        let usrs = await this.usersService.findAll();
        await this.cache.set("users", usrs)
        return usrs
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
