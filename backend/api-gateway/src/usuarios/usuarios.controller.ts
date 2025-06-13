import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('usuarios')
export class UsuariosController {
    constructor(
        @Inject('usuarios_SERVICE') private readonly client: ClientProxy,
    ) { }

    @Get()
    async findAll() {
        return this.client.send({ cmd: 'get_usuarios' }, {});
    }
}
