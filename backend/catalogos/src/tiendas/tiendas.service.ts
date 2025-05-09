import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Tienda } from '@prisma/client';

@Injectable()
export class TiendasService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Tienda[]> {
    return this.prisma.tienda.findMany();
  }

  async findById(id: number): Promise<Tienda | null> {
    return this.prisma.tienda.findUnique({ where: { id } });
  }

  async create(data: Tienda): Promise<Tienda> {
    return this.prisma.tienda.create({ data });
  }

  async update(id: number, data: Partial<Tienda>): Promise<Tienda> {
    return this.prisma.tienda.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Tienda> {
    return this.prisma.tienda.delete({ where: { id } });
  }
}
