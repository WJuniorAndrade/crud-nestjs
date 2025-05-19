import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    private readonly prisma: PrismaService,
  ){}
  async createTasks(createTaskDto: CreateTaskDto) {
    const taskCreated = await this.prisma.tasks.create({
      data: {
        ...createTaskDto,
        category: {
          connect: { name: createTaskDto.category }
        }
      } 
    });
    return taskCreated;
  }

  async findAllTasks() {
    const getAll = await this.prisma.tasks.findMany()
    return getAll;
  }

  async findOneTask(id: string) {
    return await this.prisma.tasks.findUnique({
      where: { id_task: id },
    })
  }

  async updateTask(id: string, body: UpdateTaskDto) {
    return await this.prisma.tasks.update({
      where: { id_task: id },
      data: { ...body,
        category: {
          connect: { name: body.category }
        }
       }
    })
  }

  async deleteTask(id: string) {
    return await this.prisma.tasks.delete({
      where: { id_task: id },
    })
  }
}
