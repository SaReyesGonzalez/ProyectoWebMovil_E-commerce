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

@Controller('catalogos/proveedores')
export class ProveedoresController {
  constructor(private readonly usuariosService: ProveedoresService) {}

  @Get()
  async getAll(): Promise<Proveedor[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Proveedor | null> {
    return this.usuariosService.findById(id);
  }

  @Post()
  async create(@Body() data: Proveedor): Promise<Proveedor> {
    return this.usuariosService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Proveedor>,
  ): Promise<Proveedor> {
    return this.usuariosService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Proveedor> {
    return this.usuariosService.delete(id);
  }
}
