import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Repartidor } from '@prisma/client';

@Injectable()
export class DeliveryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Repartidor[]> {
    return this.prisma.repartidor.findMany();
  }

  async findById(id: number): Promise<Repartidor | null> {
    return this.prisma.repartidor.findUnique({ where: { id } });
  }

  async create(data: Repartidor): Promise<Repartidor> {
    return this.prisma.repartidor.create({ data });
  }

  async update(id: number, data: Partial<Repartidor>): Promise<Repartidor> {
    return this.prisma.repartidor.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Repartidor> {
    return this.prisma.repartidor.delete({ where: { id } });
  }
}
