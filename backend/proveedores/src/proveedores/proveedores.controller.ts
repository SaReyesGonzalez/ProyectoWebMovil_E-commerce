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
import { ProveedoresService } from './proveedores.service';
import { Proveedor } from '@prisma/client';

@Controller('proveedores')
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @Get()
  async getAll(): Promise<Proveedor[]> {
    return this.proveedoresService.findAll();
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Proveedor | null> {
    return this.proveedoresService.findById(id);
  }

  @Post()
  async create(@Body() data: Proveedor): Promise<Proveedor> {
    return this.proveedoresService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Proveedor>,
  ): Promise<Proveedor> {
    return this.proveedoresService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Proveedor> {
    return this.proveedoresService.delete(id);
  }
}
