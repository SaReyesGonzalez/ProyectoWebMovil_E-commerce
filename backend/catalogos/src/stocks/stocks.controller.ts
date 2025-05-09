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
import { StocksService } from './stocks.service';
import { Stock } from '@prisma/client'

@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) {}

    @Get()
    async getAll(): Promise<Stock[]> {
        return this.stocksService.findAll();
    }

    @Get(':id')
    async getById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Stock | null> {
        return this.stocksService.findById(id);
    }

    @Post()
    async create(@Body() data: Stock): Promise<Stock> {
        return this.stocksService.create(data);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: Partial<Stock>,
    ): Promise<Stock> {
        return this.stocksService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<Stock> {
        return this.stocksService.delete(id);
    }
}
