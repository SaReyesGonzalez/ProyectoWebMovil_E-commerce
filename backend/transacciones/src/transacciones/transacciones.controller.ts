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
import { TransaccionesService } from './transacciones.service';
import { Transaccion } from '@prisma/client';

@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Get()
  async getAll(): Promise<Transaccion[]> {
    return this.transaccionesService.findAll();
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Transaccion | null> {
    return this.transaccionesService.findById(id);
  }

  @Post()
  async create(@Body() data: Transaccion): Promise<Transaccion> {
    return this.transaccionesService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Transaccion>,
  ): Promise<Transaccion> {
    return this.transaccionesService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Transaccion> {
    return this.transaccionesService.delete(id);
  }
}
