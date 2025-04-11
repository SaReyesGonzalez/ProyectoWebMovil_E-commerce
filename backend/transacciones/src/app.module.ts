import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [TransaccionesModule, PedidosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
