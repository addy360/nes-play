import {CacheModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TasksModule} from './tasks/tasks.module';
import {UsersModule} from './users/users.module';
import {ScheduleModule} from '@nestjs/schedule';
import {SchedulesService} from './schedules/schedules.service';
import {HttpModule} from '@nestjs/axios';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/entities/user.entity";

@Module({
    imports: [
        TasksModule,
        UsersModule,
        ScheduleModule.forRoot(),
        HttpModule,
        TypeOrmModule.forRoot({
        type:"mysql",
        host:"localhost",
        port:3306,
        username:"root",
        password:"",
        database:"nest-playground",
        entities:[User],
        synchronize:true
    })],
    controllers: [AppController],
    providers: [AppService, SchedulesService],
})
export class AppModule {
}
