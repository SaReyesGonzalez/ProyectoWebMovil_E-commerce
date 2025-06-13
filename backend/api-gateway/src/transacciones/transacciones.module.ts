import { Module } from '@nestjs/common';
import { TransaccionesController } from './transacciones.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'transacciones_SERVICE',
                transport: Transport.TCP,
                options: { host: 'localhost', port: 3002 },
            },
        ]),
    ],
    controllers: [TransaccionesController],
})
export class TransaccionesModule { }
