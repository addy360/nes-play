import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    @Get()
    getAllTasks(): any {
        return this.taskService.getTasks();
    }

    @Post()
    addTask(@Body() task: { task: string }): any {
        this.taskService.addTask(task.task)
        return "ok";
    }
}
