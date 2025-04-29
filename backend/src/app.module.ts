import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentModule } from './apartment/apartments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || '', {
      family: 4,
      tlsInsecure: true,
    }),
    ApartmentModule,
  ],
})
export class AppModule {}
