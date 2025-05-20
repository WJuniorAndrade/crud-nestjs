import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { status, priority } from '@prisma/client' 

export class CreateTaskDto {

    @IsNotEmpty({
        message: 'Título é um campo obrigatório'
    })
    @Length(0, 60, {
        message: 'Title deve conter no máximo 60 caracteres',
      })
    title:             string;

    @IsOptional()
    @Length(0, 100, {
        message: 'A description conter no máximo 100 caracteres',
      })
    description?:       string;

    @IsOptional()
    category?:          string;

    status?:            status;

    @IsOptional()
    priority?:          priority;

    @IsOptional()
    @IsDate()
    start_dt?:          Date;

    @IsOptional()
    @IsDate()
    end_dt?:            Date;
}



