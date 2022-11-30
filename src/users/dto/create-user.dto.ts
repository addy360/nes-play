import {Column} from "typeorm";

export class CreateUserDto {
    name: string;
    userName: string;
    phone: string;
    email: string;
    website: string;
}
