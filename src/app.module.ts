import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulesService } from './schedules/schedules.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TasksModule, UsersModule, ScheduleModule.forRoot(), HttpModule],
  controllers: [AppController],
  providers: [AppService, SchedulesService],
})
export class AppModule { }
