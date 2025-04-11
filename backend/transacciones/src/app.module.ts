import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransaccionesModule } from './transacciones/transacciones.module';

@Module({
  imports: [TransaccionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
