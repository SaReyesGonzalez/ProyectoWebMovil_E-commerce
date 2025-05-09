import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { Stock } from '@prisma/client';

@Injectable()
export class StocksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Stock[]> {
    return this.prisma.stock.findMany();
  }

  async findById(id: number): Promise<Stock | null> {
    return this.prisma.stock.findUnique({ where: { id } });
  }

  async create(data: Stock): Promise<Stock> {
    return this.prisma.stock.create({ data });
  }

  async update(id: number, data: Partial<Stock>): Promise<Stock> {
    return this.prisma.stock.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Stock> {
    return this.prisma.stock.delete({ where: { id } });
  }
}
