// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
//   Query,
// } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
// import { CreateTaskDTO } from './dto/create-task.dto';
// import { FilterTaskDto } from './dto/filter-task.dto';
// import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTaskWithFitlers(@Query() filterTaskDto: FilterTaskDto): Task[] {
  //   if (Object.keys(filterTaskDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterTaskDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Get('/:id')
  // findTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.findTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDTO): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Put('/:id/status')
  // updateTaskById(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ) {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskById(id, status);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   this.tasksService.deleteTaskById(id);
  // }
}
