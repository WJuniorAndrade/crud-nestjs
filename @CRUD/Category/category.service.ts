import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prisma: PrismaService,
  ){}
  
    async createCategory(categoryDto: CategoryDto) {
      const categoryCreated = await this.prisma.category.create({data: categoryDto});
      return categoryCreated;
    }

    async findAllCategory() {
      return await this.prisma.category.findMany()
    }

    async updateCategory(id: string, body: CategoryDto) {
      return await this.prisma.category.update({
        where: { id_category: id },
        data: { ...body }
      })
    }

    async deleteCategory(id: string) {
     return await this.prisma.category.delete({
      where: {id_category: id},
     }) 
    }
}
