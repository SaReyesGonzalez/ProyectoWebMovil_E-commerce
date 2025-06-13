import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('transacciones')
export class TransaccionesController {
    constructor(
        @Inject('transacciones_SERVICE') private readonly client: ClientProxy,
    ) { }

    @Get()
    async findAll() {
        return this.client.send({ cmd: 'get_transacciones' }, {});
    }
}
