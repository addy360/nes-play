import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    tasks: string[] = [];

    getTasks(): string[] {
        return [...this.tasks];
    }

    addTask(task: string): void {
        this.tasks.push(task)
    }

    deleteTask(task: string): boolean {
        this.tasks.filter(t => {
            return task !== task
        })
        return true
    }
}
