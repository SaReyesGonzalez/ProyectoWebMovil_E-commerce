import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'usuarios_SERVICE',
                transport: Transport.TCP,
                options: { host: 'localhost', port: 3001 },
            },
        ]),
    ],
    controllers: [UsuariosController],
})
export class UsuariosModule { }
