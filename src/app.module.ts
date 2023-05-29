import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user:123a456@cluster0.dot6abj.mongodb.net/',
    ),
    UsersModule,
  ],
})
export class AppModule {
  controller: [];
}
