import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'delivery_SERVICE',
                transport: Transport.TCP,
                options: { host: 'localhost', port: 3004 },
            },
        ]),
    ],
    controllers: [DeliveryController],
})
export class DeliveryModule { }
