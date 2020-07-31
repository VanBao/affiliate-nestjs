
import { IsString, IsInt } from 'class-validator';

export interface ListNews{
    page ? : number;
    limit ? : number; 
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
    @IsString()
    title: string;
  
    @IsString()
    content: string;
  
    @IsString()
    image: string;
  
    @IsInt()
    writer: number;
  }
  