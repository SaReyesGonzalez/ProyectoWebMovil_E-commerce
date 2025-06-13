import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('delivery')
export class DeliveryController {
    constructor(
        @Inject('delivery_SERVICE') private readonly client: ClientProxy,
    ) { }

    @Get()
    async findAll() {
        return this.client.send({ cmd: 'get_delivery' }, {});
    }
}
