import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "name"})
    name: string;

    @Column({name: "username"})
    username: string;

    @Column({name: "phone_number"})
    phone: string

    @Column({name: "email_address"})
    email: string

    @Column({name: "website"})
    website: string
}