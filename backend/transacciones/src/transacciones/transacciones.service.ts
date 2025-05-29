import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Transaccion } from '@prisma/client';

@Injectable()
export class TransaccionesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Transaccion[]> {
    return this.prisma.transaccion.findMany();
  }

  async findById(id: number): Promise<Transaccion | null> {
    return this.prisma.transaccion.findUnique({ where: { id } });
  }

  async create(data: Transaccion): Promise<Transaccion> {
    return this.prisma.transaccion.create({ data });
  }

  async update(id: number, data: Partial<Transaccion>): Promise<Transaccion> {
    return this.prisma.transaccion.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Transaccion> {
    return this.prisma.transaccion.delete({ where: { id } });
  }
}
