import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTasks(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAllTasks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOneTask(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return this.tasksService.updateTask(id, body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
