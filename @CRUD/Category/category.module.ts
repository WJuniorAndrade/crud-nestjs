import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
