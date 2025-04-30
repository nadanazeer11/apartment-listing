import { IsString, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  name: string;

  @IsString()
  unitNumber: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  project?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
