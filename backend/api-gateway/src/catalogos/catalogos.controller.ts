import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('catalogos')
export class CatalogosController {
    constructor(
        @Inject('catalogos_SERVICE') private readonly client: ClientProxy,
    ) { }

    @Get()
    async findAll() {
        return this.client.send({ cmd: 'get_catalogos' }, {});
    }
}
