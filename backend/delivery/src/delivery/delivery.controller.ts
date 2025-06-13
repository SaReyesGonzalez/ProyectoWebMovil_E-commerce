import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { Repartidor } from '@prisma/client';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  async getAll(): Promise<Repartidor[]> {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Repartidor | null> {
    return this.deliveryService.findById(id);
  }

  @Post()
  async create(@Body() data: Repartidor): Promise<Repartidor> {
    return this.deliveryService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Repartidor>,
  ): Promise<Repartidor> {
    return this.deliveryService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Repartidor> {
    return this.deliveryService.delete(id);
  }
}
