import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TiendasController } from './tiendas.controller';
import { TiendasService } from './tiendas.service';

@Module({
  controllers: [TiendasController],
  providers: [TiendasService, PrismaService],
})
export class TiendasModule {}