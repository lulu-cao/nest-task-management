// import { Injectable, NotFoundException } from '@nestjs/common';
// import { TaskStatus } from './task-status.enum';
// import { v4 as uuid } from 'uuid';
// import { CreateTaskDTO } from './dto/create-task.dto';
// import { FilterTaskDto } from './dto/filter-task.dto';
import { Task } from './task.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: string): Promise<Task | null> {
    return this.tasksRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.tasksRepository.delete(id);
  }
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterTaskDto: FilterTaskDto): Task[] {
  //   const { status, search } = filterTaskDto;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = this.tasks.filter((task) => {
  //       return task.status === status;
  //     });
  //   }

  //   if (search) {
  //     tasks = this.tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }

  //   return tasks;
  // }

  // findTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with id ${id} not found.`);
  //   } else {
  //     return found;
  //   }
  // }

  // createTask(createTaskDto: CreateTaskDTO): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);

  //   return task;
  // }

  // updateTaskById(id: string, status: TaskStatus): Task {
  //   const task: Task = this.findTaskById(id);
  //   task.status = status;

  //   return task;
  // }

  // deleteTaskById(id: string): void {
  //   const found = this.findTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
}
