import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { Apartment } from './schemas/apartment.schema';

@Controller('apartments')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}

  @Post()
  create(@Body() createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    return this.apartmentService.create(createApartmentDto);
  }

  @Get()
  findAll(): Promise<Apartment[]> {
    return this.apartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Apartment> {
    return this.apartmentService.findOne(id);
  }
}
