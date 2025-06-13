import { Module } from '@nestjs/common';
import { ProveedoresController } from './proveedores.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'proveedores_SERVICE',
                transport: Transport.TCP,
                options: { host: 'localhost', port: 3003 },
            },
        ]),
    ],
    controllers: [ProveedoresController],
})
export class ProveedoresModule { }
