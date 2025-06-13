import { Module } from '@nestjs/common';
import { CatalogosController } from './catalogos.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'catalogos_SERVICE',
                transport: Transport.TCP,
                options: { host: 'localhost', port: 3005 },
            },
        ]),
    ],
    controllers: [CatalogosController],
})
export class CatalogosModule { }
