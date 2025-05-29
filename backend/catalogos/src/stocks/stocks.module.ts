import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';

@Module({
  controllers: [StocksController],
  providers: [StocksService, PrismaService],
})
export class StocksModule {}
