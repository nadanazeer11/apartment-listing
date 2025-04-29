import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Apartment, ApartmentDocument } from './schemas/apartment.schema';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectModel(Apartment.name)
    private apartmentModel: Model<ApartmentDocument>,
  ) {}

  async create(data: CreateApartmentDto): Promise<Apartment> {
    const apartment = new this.apartmentModel(data);
    return apartment.save();
  }

  async findAll(): Promise<Apartment[]> {
    return this.apartmentModel.find().exec();
  }

  async findOne(id: string): Promise<Apartment> {
    const apartment = await this.apartmentModel.findById(id);
    if (!apartment) {
      throw new NotFoundException(`Apartment ${id} not found`);
    }
    return apartment;
  }
}
