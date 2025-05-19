import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  create(@Body() categoryDto: CategoryDto) {
    return this.categoryService.createCategory(categoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAllCategory();
  }

  @Put()
  update(@Param('id') id: string, @Body() body: CategoryDto) {
    return this.categoryService.updateCategory(id, body)
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id)
  }
}
