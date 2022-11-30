import {Injectable, Logger, OnModuleInit} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {HttpService} from "@nestjs/axios";
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsersService implements OnModuleInit {

    constructor(private readonly http: HttpService, @InjectRepository(User) private readonly userRepo: Repository<User>) {
    }

    private logger: Logger = new Logger('UsersService');

    async create(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepo.save(createUserDto)
    }

    findAll(): Promise<User[]> {
        return this.userRepo.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepo.findOne({where: {id}})
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number): Promise<any> {
        return this.userRepo.delete({id})
    }

    fetchUsers() {
        this.http.get<CreateUserDto[]>("https://jsonplaceholder.typicode.com/users")
            .subscribe(value => {
                value.data.forEach(user => {
                    this.create(user)
                })
            })
    }

    onModuleInit(): any {
        // this.fetchUsers()
    }
}
