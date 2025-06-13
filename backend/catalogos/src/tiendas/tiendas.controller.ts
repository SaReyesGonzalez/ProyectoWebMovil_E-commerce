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
import { TiendasService } from './tiendas.service';
import { Tienda } from '@prisma/client';

@Controller('tiendas')
export class TiendasController {
  constructor(private readonly tiendasService: TiendasService) {}

  @Get()
  async getAll(): Promise<Tienda[]> {
    return this.tiendasService.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Tienda | null> {
    return this.tiendasService.findById(id);
  }

  @Post()
  async create(@Body() data: Tienda): Promise<Tienda> {
    return this.tiendasService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Tienda>,
  ): Promise<Tienda> {
    return this.tiendasService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Tienda> {
    return this.tiendasService.delete(id);
  }
}
