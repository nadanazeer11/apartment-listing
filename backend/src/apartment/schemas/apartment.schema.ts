import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ApartmentDocument = HydratedDocument<Apartment>;

@Schema({ timestamps: true })
export class Apartment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  unitNumber: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  project?: string;

  @Prop()
  description?: string;
}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);
