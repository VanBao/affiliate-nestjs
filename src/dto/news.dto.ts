
import { IsString, IsInt, IsOptional, IsNumberString } from 'class-validator';

export class ListNewsDTO{

    @IsNumberString()
    @IsOptional()
    page: number;

    @IsNumberString()
    @IsOptional()
    limit: number; 
}

export interface NewsReponse{
    id: number;
    owner: number;
    category: number;
    title: string;
    writer: number;
    image: string;
    content: string;
    language: string;
    hot: number;
    status: number;
    find_raw: string;
    created_at: Date | string;
    updated_at: Date | string;

}

export class CreateNewsDTO {
    @IsInt()
    owner: number;

    @IsInt()
    category: number;

    @IsString()
    title: string;

    @IsInt()
    writer: number;

    @IsString()
    image: string;

    @IsString()
    content: string;

    @IsString()
    language: string;

    @IsInt()
    hot: number;

    @IsInt()
    status: number;
}

export class UpdateNewsDTO {

    @IsInt()
    @IsOptional()
    category: number;

    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    image: string;

    @IsString()
    @IsOptional()
    content: string;

    @IsInt()
    hot: number;

    @IsInt()
    status: number;
}
  