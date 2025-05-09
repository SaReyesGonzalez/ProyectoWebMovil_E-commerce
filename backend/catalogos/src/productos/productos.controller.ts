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
import { ProductosService } from './productos.service';
import { Producto } from '@prisma/client'

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Get()
    getAll(): Promise<Producto[]> {
        return this.productosService.findAll();
    }

    @Get(':id')
    async getById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Producto | null> {
        return this.productosService.findById(id);
    }

    @Post()
    async create(@Body() data: Producto): Promise<Producto> {
        return this.productosService.create(data);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: Partial<Producto>,
    ): Promise<Producto> {
        return this.productosService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<Producto> {
        return this.productosService.delete(id);
    }
}
