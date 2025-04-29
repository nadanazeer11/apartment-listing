import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentModule } from './apartment/apartments.module';

const MONGODB_URI = process.env.MONGODB_URI || '';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(MONGODB_URI),
    ApartmentModule,
  ],
})
export class AppModule {}
