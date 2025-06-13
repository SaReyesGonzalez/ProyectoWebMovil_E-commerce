import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    */

  @MessagePattern({ cmd: 'get_catalogos' })
  getUsuarios() {
    return this.appService.findAll();
  }

  @MessagePattern({ cmd: 'create_catalogos' })
  createUsuario(data: any) {
    return this.appService.create(data);
  }
}

