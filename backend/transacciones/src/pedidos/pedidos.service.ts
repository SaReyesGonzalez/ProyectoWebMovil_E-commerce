import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Pedido } from '@prisma/client';

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Pedido[]> {
    return this.prisma.pedido.findMany();
  }

  async findById(id: number): Promise<Pedido | null> {
    return this.prisma.pedido.findUnique({ where: { id } });
  }

  async create(data: Pedido): Promise<Pedido> {
    return this.prisma.pedido.create({ data });
  }

  async update(id: number, data: Partial<Pedido>): Promise<Pedido> {
    return this.prisma.pedido.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Pedido> {
    return this.prisma.pedido.delete({ where: { id } });
  }
}
