import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Order> {
    return this.orderService.getById(id);
  }

  @Post()
  async create(@Body() order: Order): Promise<Order> {
    return this.orderService.create(order);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() order: Order): Promise<Order> {
    return this.orderService.update(id, order);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.orderService.delete(id);
  }
}
