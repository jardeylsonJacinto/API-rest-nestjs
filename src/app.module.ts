import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({})
export class AppModule {
  controller: [AppController];
}
