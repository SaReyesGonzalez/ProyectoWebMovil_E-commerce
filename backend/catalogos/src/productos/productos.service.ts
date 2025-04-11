import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductosService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.producto.findMany();
    }
}
