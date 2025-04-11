import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendasModule } from './tiendas/tiendas.module';
import { ProductosModule } from './productos/productos.module';
import { StocksModule } from './stocks/stocks.module';
import { ProveedoresModule } from './proveedores/proveedores.module';

@Module({
  imports: [TiendasModule, ProductosModule, StocksModule, ProveedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
