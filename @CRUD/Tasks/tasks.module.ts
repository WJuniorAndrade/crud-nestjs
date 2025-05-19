import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { PrismaService } from 'src/database/prisma.service';
import { TasksService } from './tasks.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
