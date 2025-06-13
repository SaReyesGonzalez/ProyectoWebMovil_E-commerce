import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('proveedores')
export class ProveedoresController {
    constructor(
        @Inject('proveedores_SERVICE') private readonly client: ClientProxy,
    ) { }

    @Get()
    async findAll() {
        return this.client.send({ cmd: 'get_proveedores' }, {});
    }
}
