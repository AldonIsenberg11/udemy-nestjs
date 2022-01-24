import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {

  // public getAllTasks() {
  //   return this.tasks;
  // }

  // public getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }

  //   return tasks;
  // }

  // public getTaskById(id: string) {
  //   const task = this.tasks.find((task) => task.id === id);

  //   if (!task) {
  //     throw new NotFoundException(`Task with ID ${id} not found`);
  //   }

  //   return task;
  // }

  // public createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN, // Default
  //   };

  //   this.tasks.push(task);

  //   return task;
  // }

  // public deleteTask(id: string): void {
  //   this.getTaskById(id); // Runs validation
  //   this.tasks = this.tasks.filter((x) => x.id !== id);
  // }

  // public updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);

  //   task.status = status;

  //   return task;
  // }
}
