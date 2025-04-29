import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Apartment, ApartmentSchema } from './schemas/apartment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Apartment.name, schema: ApartmentSchema },
    ]),
  ],
})
export class ApartmentModule {}
