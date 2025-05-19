import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CategoryDto {

    @IsNotEmpty({
        message: 'Categoria é um campo obrigatório'
    })
    @Length(0, 40, {
      message: 'Nome da categoria deve conter no máximo 40 caracteres',
    })
    name:  string
}



