import { Module } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import { TransaccionesController } from './transacciones.controller';

@Module({
  providers: [TransaccionesService],
  controllers: [TransaccionesController]
})
export class TransaccionesModule {}
