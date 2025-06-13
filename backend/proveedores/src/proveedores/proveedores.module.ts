import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProveedoresController } from './proveedores.controller';
import { ProveedoresService } from './proveedores.service';

@Module({
  controllers: [ProveedoresController],
  providers: [ProveedoresService, PrismaService],
})
export class ProveedoresModule {}
