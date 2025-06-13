import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { CatalogosModule } from './catalogos/catalogos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    UsuariosModule,
    TransaccionesModule,
    CatalogosModule,
    ProveedoresModule,
    DeliveryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
