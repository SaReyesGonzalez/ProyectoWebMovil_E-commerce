import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { Usuario } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

  async findById(id: number): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async create(data: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({ data });
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Usuario> {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
