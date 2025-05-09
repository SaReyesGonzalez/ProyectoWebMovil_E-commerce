import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { Proveedor } from '@prisma/client';

@Injectable()
export class ProveedoresService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.proveedor.findMany();
  }

  async findById(id: number): Promise<Proveedor | null> {
    return this.prisma.proveedor.findUnique({ where: { id } });
  }

  async create(data: Proveedor): Promise<Proveedor> {
    return this.prisma.proveedor.create({ data });
  }

  async update(id: number, data: Partial<Proveedor>): Promise<Proveedor> {
    return this.prisma.proveedor.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Proveedor> {
    return this.prisma.proveedor.delete({ where: { id } });
  }
}
