import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { TasksModule } from '@CRUD/Tasks/tasks.module';
import { CategoryModule } from '@CRUD/Category/category.module';

@Module({
  imports: [TasksModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
