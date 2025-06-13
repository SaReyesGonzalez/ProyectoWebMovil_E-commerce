import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Producto } from '@prisma/client';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Producto[]> {
    return this.prisma.producto.findMany();
  }

  async findById(id: number): Promise<Producto | null> {
    return this.prisma.producto.findUnique({ where: { id } });
  }

  async create(data: Producto): Promise<Producto> {
    return this.prisma.producto.create({ data });
  }

  async update(id: number, data: Partial<Producto>): Promise<Producto> {
    return this.prisma.producto.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Producto> {
    return this.prisma.producto.delete({ where: { id } });
  }
}
