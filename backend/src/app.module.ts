import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    OrderModule,
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/delivery-simulator?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
