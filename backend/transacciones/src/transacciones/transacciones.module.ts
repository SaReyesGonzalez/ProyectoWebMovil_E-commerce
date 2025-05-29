import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TransaccionesController } from './transacciones.controller';
import { TransaccionesService } from './transacciones.service';

@Module({
  controllers: [TransaccionesController],
  providers: [TransaccionesService, PrismaService],
})
export class TransaccionesModule {}
